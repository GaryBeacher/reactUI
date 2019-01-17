import React, {Component} from 'react'
import Layout from './Layout'
import SweetGesture from './SweetGesture'

export default class extends Component {
	constructor(props) {
		super(props)
		this.state = {
			cur: 0
		}
	}
	componentWillMount() {
		this.lis = [
			'http://img1.v.tmcdn.net/haizei/bizhi/big_pic/20120721-116644/7677948fd4a9b1bb78c6973ddfce9ec220.jpg', 'http://img1.v.tmcdn.net/haizei/bizhi/big_pic/20120721-116644/d5079c5125ac05faf92f144bc729ac4b14.jpg', 'http://img1.v.tmcdn.net/haizei/bizhi/big_pic/20120721-116644/8749aa853fb549199ddfd4f767003c9c66.jpg', 'http://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/1e30e924b899a90115bead131c950a7b0208f508.jpg', 'http://img0.imgtn.bdimg.com/it/u=4120266250,3416498161&fm=214&gp=0.jpg']
	}
	render() {
		const length = this.lis.length
		const style = {
			width: `${this.lis.length * 100}%`,
			transform: `translate3d(-${this.state.cur * 100 / length}%, 0, 0)`
		}
		const lis = this.lis.map((v, k) => {
			return (
				<li key={k} className={this.state.cur === k ? 'on' : ''}>
					<img src={v} alt="" width="100%" height="100%"/>
				</li>
			)
		})
		return (
			<Layout name="左右全屏">
				<div className="fullpage fullpagex" onTouchMove={e => e.preventDefault()}>
					<SweetGesture
						onSwipeLeft={this.swipeLeft.bind(this)}
						onSwipeRight={this.swipeRight.bind(this)}
					>
						<ul style={style}>
							{lis}
						</ul>
					</SweetGesture>
					<div className="tipsx"><i className="iconfont icon-xiayibu"></i></div>
					<div className="pages">{this.state.cur + 1} / {length}</div>
				</div>
			</Layout>
		)
	}
	swipeLeft() {
		if(this.state.cur < this.lis.length - 1) {
			this.setState({
				cur: this.state.cur + 1
			})
		}
	}
	swipeRight() {
		if(this.state.cur > 0) {
			this.setState({
				cur: this.state.cur - 1
			})
		}
	}
}