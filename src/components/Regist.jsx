import React, {Component, PropTypes} from 'react'
import Layout from './Layout'
import {ToastBox} from './Toast'

export default class Regist extends Component {
	static contextTypes = {
	    router: PropTypes.object,
	}
	constructor(props) {
		super(props)
		this.state = {
			phone: '',
			pwd: '',
			code: '',
			isregist: false,
			getCoding: false,
			time: 59,
			codedes: '获取验证码',
			toast: {
				show: false
			}
		}
		this.handleInputChange = this.handleInputChange.bind(this)
		this.clearInput = this.clearInput.bind(this)
	}

	componentWillUnmount() {
		clearTimeout(this.timer1)
		clearInterval(this.timer2)
	}

	handleSubmit(e) {
		if(this.state.isregist) {
			return
		}

		this.setState({
			isregist: true
		})

		this.timer1 = setTimeout(() => {
			this.setState({
				isregist: false,
				toast: {
					show: true,
					type: 2,
					text: '注册成功，正在跳转..',
					time: 1000
				}
			})
			setTimeout(() => this.context.router.push('/'), 1000)
		}, 3000)
		e.preventDefault()
	}

	handleInputChange(e) {
		const target = e.target
		const value = target.value
		const name = target.name

		this.setState({
			[name]: value
		})
	}

	clearInput(e) {
		const name = e.currentTarget.previousSibling.name
		this.setState({
			[name]: ''
		})
	}

	checkForm() {
		return  /^1[3|4|5|7|8]\d{9}$/.test(this.state.phone) &&
				/^.{6,16}$/.test(this.state.pwd) &&
				/^\w+$/.test(this.state.code)
	}

	hiddenToast() {
		this.setState({
			toast: {
				show: false
			}
		})
		return
	}

	getCode() {
		if(this.state.getCoding) {
			return
		}
		if(!/^1[3|4|5|7|8]\d{9}$/.test(this.state.phone)) {
			this.setState({
				toast: {
					show: true,
					type: 4,
					text: '手机号码格式不正确',
					time: 1000
				}
			})
			return
		}
		this.setState({
			getCoding: true
		})
		setTimeout(() => {
			this.setState({
				toast: {
					show: true,
					type: 2,
					text: '验证码已发送',
					time: 1000
				}
			})
		}, 2000)
		this.timer2 = setInterval(() => {
			if(this.state.time === 0) {
				this.setState({
					time: 60,
					getCoding: false,
					codedes: '重新获取'
				})
				clearInterval(this.timer2)
			}
			this.setState({
				time: this.state.time - 1
			})
		}, 1000)
	}

	render() {
		const disabled = this.checkForm() ? true : false
		const buttonStyle = disabled ? 'button' : 'button disabled'
		return (
			<Layout name="Regist">
				<div className="login">
					<form onSubmit={this.handleSubmit.bind(this)}>
						<div className="frow">
							<div className="row">
								<label>+86</label>
								<div className="input">
									<input name="phone" value={this.state.phone} onChange={this.handleInputChange} required type="tel" placeholder="请输入手机号" />
									<span onClick={this.clearInput} className="clearinput"><i className="iconfont icon-guanbi"></i></span>
								</div>
							</div>
							<div className="row">
								<label>设置密码</label>
								<div className="input">
									<input name="pwd" value={this.state.pwd} onChange={this.handleInputChange} required type="password" placeholder="请输入密码，6-16位" />
									<span onClick={this.clearInput} className="clearinput"><i className="iconfont icon-guanbi"></i></span>
								</div>
							</div>
							<div className="row">
								<div className="input">
									<input name="code" value={this.state.code} onChange={this.handleInputChange} autoComplete="off" required type="tel" placeholder="请输入6位短信验证码" />
									<span onClick={this.clearInput} className="clearinput"><i className="iconfont icon-guanbi"></i></span>
								</div>
								<div className="labeldes">
									<span onClick={this.getCode.bind(this)}>
										{this.state.getCoding ? this.state.time : this.state.codedes}
									</span>
								</div>
							</div>
						</div>
						<div className="frow lrp20">
							<button className={buttonStyle} disabled={!disabled || this.state.isregist}>
								{this.state.isregist ? '正在注册..' : '注册'}
							</button>
						</div>
						<div className="tips">小提示：已模拟注册流程请随意填写</div>
					</form>
					<ToastBox {...this.state.toast} hidden={this.hiddenToast.bind(this)} />
				</div>

			</Layout>
		)
	}
}