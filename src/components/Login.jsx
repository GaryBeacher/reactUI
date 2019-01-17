import React, {Component, PropTypes} from 'react'
import Layout from './Layout'
import {ToastBox} from './Toast'

export default class Login extends Component {
	static contextTypes = {
	    router: PropTypes.object,
	}
	constructor(props) {
		super(props)
		this.state = {
			phone: '',
			pwd: '',
			code: '',
			islogin: false,
			toast: {
				show: false
			}
		}
		this.handleInputChange = this.handleInputChange.bind(this)
		this.clearInput = this.clearInput.bind(this)
	}

	componentWillUnmount() {
		clearTimeout(this.timer)
	}

	handleSubmit(e) {
		if(this.state.islogin) {
			return
		}

		this.setState({
			islogin: true
		})

		this.timer = setTimeout(() => {
			this.setState({
				islogin: false,
				toast: {
					show: true,
					type: 2,
					text: '登录成功，正在跳转..',
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
	}

	render() {
		const disabled = this.checkForm() ? true : false
		const buttonStyle = disabled ? 'button' : 'button disabled'
		return (
			<Layout name="Login">
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
								<label>密码</label>
								<div className="input">
									<input name="pwd" value={this.state.pwd} onChange={this.handleInputChange} required type="password" placeholder="请输入密码，6-16位" />
									<span onClick={this.clearInput} className="clearinput"><i className="iconfont icon-guanbi"></i></span>
								</div>
							</div>
							<div className="row">
								<label>验证码</label>
								<div className="input">
									<input name="code" value={this.state.code} onChange={this.handleInputChange} autoComplete="off" required type="tel" placeholder="请输入验证码" />
									<span onClick={this.clearInput} className="clearinput"><i className="iconfont icon-guanbi"></i></span>
								</div>
								<div className="labeldes"><img src={require('../assets/call.jpg')} alt="" /></div>
							</div>
						</div>
						<div className="frow lrp20">
							<button className={buttonStyle} disabled={!disabled || this.state.islogin}>
								{this.state.islogin ? '正在登录..' : '登录'}
							</button>
						</div>
						<div className="tips">小提示：已模拟登录流程请随意填写</div>
					</form>
					<ToastBox {...this.state.toast} hidden={this.hiddenToast.bind(this)} />
				</div>

			</Layout>
		)
	}
}