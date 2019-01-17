import React, {Component} from 'react'
import Layout from './Layout'
import SweetGesture from './SweetGesture'
import {DialogBox} from './Dialog'
import Code from './Code'

export default class extends Component {
	constructor(props) {
		super(props)
		this.state = {
			cur: 0,
			dialog: {
				show: false
			}
		}
	}
	componentWillMount() {
		const codes = `<SweetGesture
	onSwipeUp={this.swipeUp}
	onSwipeDown={this.swipeDown}
	direction='DIRECTION_ALL'
>	
	<ul style={style}>
		{lis}
	</ul>
</SweetGesture>`
		this.lis = [
			'http://img1.v.tmcdn.net/haizei/bizhi/big_pic/20120721-116644/7677948fd4a9b1bb78c6973ddfce9ec220.jpg', 'http://img1.v.tmcdn.net/haizei/bizhi/big_pic/20120721-116644/d5079c5125ac05faf92f144bc729ac4b14.jpg', 'http://img1.v.tmcdn.net/haizei/bizhi/big_pic/20120721-116644/8749aa853fb549199ddfd4f767003c9c66.jpg', 'http://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/1e30e924b899a90115bead131c950a7b0208f508.jpg', 'http://img0.imgtn.bdimg.com/it/u=4120266250,3416498161&fm=214&gp=0.jpg']
	}
	render() {
		const length = this.lis.length
		const style = {transform: `translate3d(0, -${this.state.cur * 100}%, 0)`}
		const lis = this.lis.map((v, k) => {
			return (
				<li key={k} className={this.state.cur === k ? 'on' : ''}>
					<img src={v} alt="" width="100%" height="100%"/>
				</li>
			)
		})
		return (
			<Layout name="上下全屏" right={{icon: 'pinglun', callback: this.showCode.bind(this)}}>
				<div className="fullpage" onTouchMove={e => e.preventDefault()}>
					<SweetGesture
						onSwipeUp={this.swipeUp.bind(this)}
						onSwipeDown={this.swipeDown.bind(this)}
						direction='DIRECTION_ALL'
					>
						<ul style={style}>
							{lis}
						</ul>
					</SweetGesture>
					<div className="tips"><i className="iconfont icon-shouqi"></i></div>
					<div className="pages">{this.state.cur + 1} / {length}</div>
					<DialogBox {...this.state.dialog} hidden={this.hidden.bind(this)} />
				</div>
			</Layout>
		)
	}
	swipeUp() {
		if(this.state.cur < this.lis.length - 1) {
			this.setState({
				cur: this.state.cur + 1,
				dialog: {
					show: false
				}
			})
		}
	}
	swipeDown() {
		if(this.state.cur > 0) {
			this.setState({
				cur: this.state.cur - 1,
				dialog: {
					show: false
				}
			})
		}
	}
	showCode() {
		this.setState({
			dialog: {
				show: true,
				title: '提示',
				content: `垂直方向的事件默认不开启，设置direction='DIRECTION_ALL'开启`
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
}