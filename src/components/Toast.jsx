import React, {PropTypes, Component} from 'react'
import Layout from './Layout'
import Des from './Des'
import Code from './Code'

export class ToastBox extends Component {
	static propTypes = {
		type: PropTypes.any,
		text: PropTypes.string,
		time: PropTypes.number
	}
	constructor(props) {
		super(props)
		this.state = {
			show: props.show || false
		}
	}
	componentWillReceiveProps(nextProps) {
		if(nextProps.show) {
			this.setState({
				show: true
			}, () => {
				setTimeout(() => {
					this.props.hidden()
				}, this.props.time || 2000)
			})
		}
    }
	render() {
		const {type, text, show} = this.props
		const div = show ? 
					(<div className="toast" onTouchMove={e => e.preventDefault()}>
						{this.createSpan(type, text)}
					</div>) : null
		return (
			<div>
				{div}
			</div>
		)
	}
	createSpan(type, text) {
		if(type === 1 || type === 'loading') {
			return <div>
						<span className="loading"></span>
						<p>{text || '正在加载..'}</p>
					</div>
		} else if(type === 2 || type === 'success') {
			return <div>
						<span><i className="iconfont icon-radiobutton21"></i></span>
						<p>{text || '操作完成'}</p>
					</div>
		} else if(type === 3 || type === 'warn') {
			return <div>
						<span><i className="iconfont icon-zhuyi"></i></span>
						<p>{text || '警告操作'}</p>
					</div>
		} else if(type === 4 || type === 'error') {
			return <div>
						<span><i className="iconfont icon-roundclose"></i></span>
						<p>{text || '发生错误'}</p>
					</div>
		} else {
			return <div><h3>{text}</h3></div>
		}
	}
}

export default class extends Component {
	constructor(props) {
		super(props)
		this.state = {
			toast: {
				show: false
			}
		}
	}
	render() {
const codes = `this.setState({
	toast: {
		type: 3,
		text: '网络连接失败'
	}
})`
		return (
			<Layout name="提示框">
				<Des info="<ToastBox {...this.state.toast} />" />
				<div className="demoarea">
					<div className="btn multiple" onClick={this.showLoading.bind(this)}>加载状态</div>
					<div className="btn multiple" onClick={this.showSuccess.bind(this)}>操作成功</div>
					<div className="btn multiple" onClick={this.showWarn.bind(this)}>显示警告</div>
					<div className="btn multiple" onClick={this.showError.bind(this)}>显示错误</div>
					<div className="btn multiple" onClick={this.showText.bind(this)}>文字显示</div>
					<Code codes={codes} />
				</div>
				<ToastBox {...this.state.toast} hidden={this.hidden.bind(this)} />
			</Layout>
		)
	}
	showLoading() {
		this.setState({
			toast: {
				show: true,
				type: 1
			}
		})
	}
	showSuccess() {
		this.setState({
			toast: {
				show: true,
				type: 2
			}
		})
	}
	showWarn() {
		this.setState({
			toast: {
				show: true,
				type: 3,
				text: '网络连接失败'
			}
		})
	}
	showError() {
		this.setState({
			toast: {
				show: true,
				type: 4,
				text: '数据加载失败'
			}
		})
	}
	showText() {
		this.setState({
			toast: {
				show: true,
				text: '纯文字显示'
			}
		})
	}
	hidden() {
		this.setState({
			toast: {
				show: false
			}
		})
	}
}