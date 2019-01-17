import React, {Component} from 'react'
import Layout from './components/Layout'
import {Link} from 'react-router'
import {DialogBox} from './components/Dialog'

export default class Demos extends Component {
	constructor(props) {
		super(props)
		this.state = {
			dialog: {
				show: false
			}
		}
	}
	render() {
		return (
			<Layout name="组件列表" right={{icon: 'pinglun', callback: this.showTip.bind(this)}}>
				<div className="demos">
					<ul>
						<li>
							<Link to="/demo/tab">
								<span><i className="iconfont icon-zonghe"></i></span>
								<span>选项卡</span>
							</Link>
						</li>
						<li>
							<Link to="/demo/slide">
								<span><i className="iconfont icon-tupian"></i></span>
								<span>轮播图</span>
							</Link>
						</li>
						<li>
							<Link to="/demo/totop">
								<span><i className="iconfont icon-shouqi"></i></span>
								<span>回到顶部</span>
							</Link>
						</li>
						
						<li>
							<Link to="/demo/animate">
								<span><i className="iconfont icon-daohang"></i></span>
								<span>动画</span>
							</Link>
						</li>
						<li>
							<Link to="/demo/dialog">
								<span><i className="iconfont icon-pinglun"></i></span>
								<span>对话框</span>
							</Link>
						</li>
						<li>
							<Link to="/demo/toast">
								<span><i className="iconfont icon-xinxi"></i></span>
								<span>提示框</span>
							</Link>
						</li>
						<li>
							<Link to="/demo/fullpage">
								<span><i className="iconfont icon-shouji"></i></span>
								<span>全屏滑动上下</span>
							</Link>
						</li>
						<li>
							<Link to="/demo/fullpagex">
								<span><i className="iconfont icon-shouji"></i></span>
								<span>全屏滑动左右</span>
							</Link>
						</li>
						<li>
							<Link to="/demo/gesture">
								<span><i className="iconfont icon-qita"></i></span>
								<span>手指事件</span>
							</Link>
						</li>
						<li>
							<Link to="/demo/switch">
								<span><i className="iconfont icon-xiangqu"></i></span>
								<span>开关</span>
							</Link>
						</li>
						<li>
							<Link to="/demo/countdown">
								<span><i className="iconfont icon-24xiaoshiqiantai"></i></span>
								<span>倒计时</span>
							</Link>
						</li>
						<li>
							<Link to="/demo/refresh">
								<span><i className="iconfont icon-yuding"></i></span>
								<span>下拉刷新</span>
							</Link>
						</li>
						<li>
							<Link to="/demo/infiniteload">
								<span><i className="iconfont icon-mai"></i></span>
								<span>无限加载</span>
							</Link>
						</li>
						<li>
							<Link to="/demo/progress">
								<span><i className="iconfont icon-tingchechang"></i></span>
								<span>进度条</span>
							</Link>
						</li>
						<li>
							<Link to="/demo/citypicker">
								<span><i className="iconfont icon-zhusu"></i></span>
								<span>城市选择</span>
							</Link>
						</li>
						<li>
							<Link to="/demo/datepicker">
								<span><i className="iconfont icon-shijian"></i></span>
								<span>日期选择</span>
							</Link>
						</li>
						<li>
							<Link to="/demo/login">
								<span><i className="iconfont icon-geren"></i></span>
								<span>登录</span>
							</Link>
						</li>
						<li>
							<Link to="/demo/regist">
								<span><i className="iconfont icon-dianping"></i></span>
								<span>注册</span>
							</Link>
						</li>
						<li>
							<Link to="/demo/slider">
								<span><i className="iconfont icon-zhongzhuan"></i></span>
								<span>滑块</span>
							</Link>
						</li>
						
						<li>
							<Link to="/demo/upload">
								<span><i className="iconfont icon-youji"></i></span>
								<span>图片上传</span>
							</Link>
						</li>
						<li>
							<Link to="/demo/select">
								<span><i className="iconfont icon-radiobutton2"></i></span>
								<span>单选/复选</span>
							</Link>
						</li>
						<li>
							<Link to="/demo/indicator">
								<span><i className="iconfont icon-qing"></i></span>
								<span>加载动画</span>
							</Link>
						</li>
						<li>
							<Link to="/demo/fullslide">
								<span><i className="iconfont icon-haoping"></i></span>
								<span>图片预览</span>
							</Link>
						</li>
						<li>
							<Link to="/demo/textmarquee">
								<span><i className="iconfont icon-xitongcaidan1"></i></span>
								<span>弹幕</span>
							</Link>
						</li>
						<li className="disabled">
							<Link to="/demo/form">
								<span><i className="iconfont icon-ziyouanpai"></i></span>
								<span>表单</span>
							</Link>
						</li>
						<li>
							<Link to="/demo/actionsheet">
								<span><i className="iconfont icon-fenxiang"></i></span>
								<span>回调事件</span>
							</Link>
						</li>
					</ul>
					<DialogBox {...this.state.dialog} hidden={this.hidden.bind(this)} />
				</div>
			</Layout>
		)
	}
	showTip() {
		this.setState({
			dialog: {
				show: true,
				title: '┑(￣▽ ￣)┍',
				content: `灰色部分功能暂时未完成`,
				confirmText: '嗯~'
			}
		})
	}
	hidden() {
		this.setState({
			dialog: {
				show: false
			}
		})
	}
	routerWillLeave(nextLocation) {
		console.log(nextLocation)
	}
}