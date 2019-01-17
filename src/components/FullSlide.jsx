import React, {Component} from 'react'
import SweetGesture from './SweetGesture'

export default class extends Component {
	constructor(props) {
		super(props)
		this.state = {
			cur: 0,
			show: false
		}
	}
	componentWillReceiveProps(nextProps) {
		if(nextProps.show) {
			this.setState({
				show: nextProps.show,
				cur: nextProps.cur
			})
		}
	}
	render() {
		const length = this.props.imgs.length
		const style = {
			width: `${length * 100}%`,
			transform: `translate3d(-${this.state.cur * 100 / length}%, 0, 0)`
		}
		const lis = this.props.imgs.map((v, k) => {
			return (
				<li key={k} className={this.state.cur === k ? 'on' : ''}>
					<img src={v} alt=""/>
				</li>
			)
		})
		return (
			this.state.show ? <div className="fullwrap" onTouchMove={e => e.preventDefault()}>
				<SweetGesture
					onSwipeLeft={this.swipeLeft.bind(this)}
					onSwipeRight={this.swipeRight.bind(this)}
				>
					<ul style={style}>
						{lis}
					</ul>
				</SweetGesture>
				<div className="close" onClick={this.close.bind(this)}><i className="iconfont icon-guanbi"></i></div>
				<div className="pages">{this.state.cur + 1} / {length}</div>
			</div> : null
		)
	}
	close() {
		this.setState({
			show: false
		})
		this.props.reset()
	}
	swipeLeft() {
		if(this.state.cur < this.props.imgs.length - 1) {
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