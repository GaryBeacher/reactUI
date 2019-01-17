import React, {Component} from 'react'
import Layout from './Layout'
import SweetAnimate from './SweetAnimate'
import Code from './Code'
import {ToastBox} from './Toast'

export default class Upload extends Component {
	constructor(props) {
		super(props)
		this.state = {
			upload: {
				show: false
			},
			list: ''
		}
	}
	render() {
		const list = this.state.list ? <div className="uploaddemo">
			<h3>{this.state.list.msg}</h3>
			<ul>
				{this.state.list.data.map((v, k) => {
					return <li key={k}><img src={v} alt=""/></li>
				})}
			</ul>
		</div> : null
		const codes = `const upload = {
	show: true,
	length: 9, //图片数量
	size: 1024, //图片尺寸
	callback: this.callback.bind(this)
}
<UploadBox {...upload} />`
		return (
			<Layout name="Upload">
				<div className="demoarea">
					<Code codes={codes} />
					<div className="line"></div>
					<div className="abtn" onClick={this.showUpload.bind(this)}>点我打开</div>
					{list}
				</div>
				<UploadBox {...this.state.upload} />
			</Layout>
		)
	}
	showUpload() {
		this.setState({
			upload: {
				show: true,
				length:1,
				size: 1024,
				callback: this.callback.bind(this)
			}
		})
	}
	callback(data) {
		if(data) {
			this.setState({
				upload: {
					show: false
				},
				list: data
			})
		} else {
			this.setState({
				upload: {
					show: false
				}
			})
		}
	}
}

class UploadBox extends Component {
	constructor(props) {
		super(props)
		this.state = {
			show: false,
			piclist: [],
			msg: '',
			showDelete: false,
			disabled: true,
			toast: {
				show: false
			}
		}
	}
	componentWillReceiveProps(nextProps) {
		if(nextProps.show) {
			this.setState({
				show: true,
			})
		}
    }
	render() {
		const sendStyle = this.state.disabled ? 'right disabled' : 'right'
		const div = this.state.show ? <div className="upload">
				<div className="inner">
					<div className="uploadbar head">
						<div className="back" onClick={this.back.bind(this)}>取消</div>
						<div className={sendStyle} onClick={this.sendFile.bind(this)}>发送</div>
					</div>
					<textarea ref="msg" onChange={this.handleChange.bind(this)} placeholder="这一刻的想法..."></textarea>
					<div className="pics">
						<ul>
							{this.state.piclist.map((v, k) => {
								return <li key={k}>
											<div className="img" onClick={this.toggleDelete.bind(this)}>
												<img src={v} alt="" />
											</div>
											{this.state.showDelete ? <div onClick={this.delImg.bind(this, k)} className="del">
												<i className="iconfont icon-guanbi"></i>
											</div> : null}
										</li>
							})}
							<li className="addpic">
								<label htmlFor="file"></label>
								<input type="file" id="file" onChange={this.fileChange.bind(this)} className="fileinput" />
							</li>
						</ul>
					</div>
				</div>
				<ToastBox {...this.state.toast} hidden={this.hiddenToast.bind(this)} />
			</div> : null
		return (
			<SweetAnimate
				component="span"
			    enter="slideInUp"
			    leave="slideOutDown"
			    durationEnter={300}
			    durationLeave={300}>
			    {div}
			</SweetAnimate>
		)
	}
	back() {
		this.close(this.props.callback)
	}
	close(fn) {
		this.setState({
			show: false,
			piclist: [],
			msg: '',
			showDelete: false,
			disabled: true
		})
		if(typeof fn === 'function') {
			fn()
		}
	}
	handleChange() {
		this.setState({
			msg: this.refs.msg.value.replace(/(<([^>]+)>)/ig, '')
		}, () => {
			if(!this.state.msg) {
				this.setState({
					disabled: true
				})
			} else {
				this.setState({
					disabled: false
				})
			}
		})
	}
	sendFile() {
		if(this.state.piclist.length || this.state.msg) {
			this.close(this.props.callback({
				msg: this.state.msg,
				data: this.state.piclist
			}))
		}
	}
	fileChange(e) {
		if(this.state.piclist.length === this.props.length) {
			this.setState({
				toast: {
					show: true,
					type: 3,
					text: '最多只能上传' + this.props.length + '张~',
					time: 800
				}
			})
			return
		}
		const file = e.target.files[0]
		if(!file) {
			return
		}
		if(!/image/.test(file.type)) {
			this.setState({
				toast: {
					show: true,
					type: 3,
					text: '只能上传图片哦~',
					time: 800
				}
			})
			return
		}
		if(file.size / 1024 > this.props.size) {
			this.setState({
				toast: {
					show: true,
					type: 3,
					text: '图片尺寸太大啦~',
					time: 800
				}
			})
			return
		}
		const $fileData = new FileReader()
		$fileData.readAsDataURL(file)
		$fileData.onload = data => {
			this.setState({
				piclist: this.state.piclist.concat(data.target.result),
				disabled: false
			})
		}
	}
	delImg(key) {
		this.setState({
			piclist: this.state.piclist.filter((v, k) => k !== key)
		}, () => {
			if(!this.state.piclist.length) {
				this.setState({
					disabled: true
				})
			}
		})
	}
	toggleDelete() {
		this.setState({
			showDelete: !this.state.showDelete
		})
	}
	hiddenToast() {
		this.setState({
			toast: {
				show: false
			}
		})
	}
}