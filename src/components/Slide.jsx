import React, { Component } from 'react'
import Layout from './Layout'
import Des from './Des'

class SlideBox extends Component {
	constructor(props) {
		super(props)
		this.state = {
			cur: 0,
			transform: '',
			duration: ''
		}
	}
	componentWillMount() {
		this.len = this.props.data.length
		this.time = this.props.time || 3000
		this.autoplay = this.props.autoplay || false
	}
	componentDidMount() {
		window.addEventListener('resize', () => this.getInnerWidth(), !1)
		if (this.autoplay) {
			this.moveHandler()
		}
	}
	componentWillUnmount() {
		if (this.autoplay) {
			clearInterval(this.timeId)
		}
	}
	render() {
		const lis = this.props.data.map((v, k) => {
			return (
				<li key={k}>
					<img src={v.img} alt={v.txt} />
					{(() => {
						if (this.props.showtext) {
							return <p>{v.txt}</p>
						}
					})()}
				</li>
			)
		})
		const spans = this.props.data.map((v, k) => {
			return (
				<span
					key={k}
					className={k === this.state.cur ? 'on' : ''}
					onClick={this.clickHandler.bind(this, k)}
				></span>
			)
		})
		const ulStyle = {
			width: `${this.props.data.length * 100}%`,
			transform: this.state.transform,
			WebkitTransitionDuration: this.state.duration
		}
		return (
			<div className="slide">
				<div className="imgbox">
					<ul
						style={ulStyle}
						onTouchStart={this.touchStart.bind(this)}
						onTouchMove={this.touchMove.bind(this)}
						onTouchEnd={this.touchEnd.bind(this)}
					>{lis}</ul>
				</div>
				<div className={this.props.showtext ? 'arrows showtext' : 'arrows'}>
					{spans}
				</div>
			</div>
		)
	}
	clickHandler(k) {
		this.setState({
			cur: k
		}, this.setCallback)
	}
	touchStart(e) {
		if (this.autoplay) {
			clearInterval(this.timeId)
		}
		this.getInnerWidth()
		this.x = e.touches[0].pageX
		this.distance = 0
	}
	touchMove(e) {
		this.distance = e.changedTouches[0].pageX - this.x
		this.setState({
			transform: `translate3d(${-this.innerWidth * this.state.cur + this.distance}px, 0, 0)`,
			duration: `0ms`
		})
		if (Math.abs(this.distance) > 10) {
			e.preventDefault()
		}
	}
	touchEnd(e) {
		if (this.autoplay) {
			this.moveHandler()
		}
		if (this.distance < -50 && this.state.cur < this.len - 1) {
			this.setState({
				cur: this.state.cur + 1
			}, this.setCallback)
		} else if (this.distance > 50 && this.state.cur > 0) {
			this.setState({
				cur: this.state.cur - 1
			}, this.setCallback)
		} else {
			this.setState({
				cur: this.state.cur
			}, this.setCallback)
		}
		this.setState({
			duration: ''
		})
	}
	setCallback() {
		this.setState({
			transform: `translate3d(-${this.state.cur * 100 / this.props.data.length}%, 0, 0)`
		})
	}
	autoMove() {
		if (this.state.cur === this.len - 1) {
			this.setState({
				cur: 0
			}, this.setCallback)
		} else {
			this.setState({
				cur: this.state.cur + 1
			}, this.setCallback)
		}
	}
	moveHandler() {
		this.timeId = setInterval(() => this.autoMove(), this.time)
	}
	getInnerWidth() {
		this.innerWidth = Math.max(window.innerWidth, document.body.clientWidth)
	}
}

export default class Slide extends Component {
	render() {
		const slide = [
			{
				img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=822258577,3372713154&fm=26&gp=0.jpg',
				txt: '第一张图片'
			},
			{
				img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543987000915&di=6d4023b0ad432e60ceea3c028c4b155c&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F17%2F80%2F90%2F5594c1b22d274_1024.jpg',
				txt: '第二张图片'
			},
			{
				img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543987000914&di=2e8e0d5c81ece9c2a9c3595b49d8090d&imgtype=0&src=http%3A%2F%2Fpic-cdn.35pic.com%2F58pic%2F17%2F86%2F92%2F55a0b0fc4ac3c_1024.jpg',
				txt: '第三张图片'
			},
		]
		return (
			<Layout name="轮播图">
				<Des info="默认效果 <SlideBox data={slide} />" />
				<SlideBox data={slide} />
				<Des info="显示文本 <SlideBox data={slide} showtext={true} />" />
				<SlideBox data={slide} showtext={true} />
				<Des info="自动播放 <SlideBox data={slide} autoplay={true} />" />
				<SlideBox data={slide} autoplay={true} />
				<Des info="自动播放间隔 <SlideBox data={slide} autoplay={true} time={5000} />" />
				<SlideBox data={slide} autoplay={true} time={5000} />
			</Layout>
		)
	}
}