import React, { Component } from 'react'
import Layout from './Layout'
import SweetAnimate from './SweetAnimate'
import { TabBox } from './Tab'
import { ToastBox } from './Toast'
import citydata from '../plugins/citydata'

export class CityPickerBox extends Component {
	constructor(props) {
		super(props)
		this.state = {
			show: false,
			tagshow: false,
			tagword: ''
		}
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.show) {
			this.setState({
				show: true
			})
		}
	}
	componentDidUpdate() {
		if (this.state.show) {
			this.update(this.refs.ul)
		}
	}
	componentWillMount() {
		this.cityData = this.props.cityData
	}
	componentWillUnmount() {
		this.setState({
			show: false
		})
	}
	findTag(key, e) {
		this.find(e.target, key)
		setTimeout(() => this.setState({ tagshow: false }), 300)
	}

	touchNavMove(e) {
		let x = e.touches[0].pageX
		let y = e.touches[0].pageY
		const safeArea = JSON.parse(e.currentTarget.dataset.pos)
		if (safeArea.left < x && x < safeArea.width + safeArea.left && safeArea.top < y && y < safeArea.top + safeArea.height && e.target.nodeName === 'LI') {
			const target = document.elementFromPoint(x, y)
			const key = target.dataset.word
			if (key) {
				this.find(target, key)
			}
		}
		//e.preventDefault()
	}
	find(elem, key) {
		elem.parentNode.parentNode.querySelector(`[data-tag=${key}]`).scrollIntoView()
		this.setState({
			tagshow: true,
			tagword: key.length > 1 ? '热' : key
		})
	}
	touchNavEnd(e) {
		this.setState({
			tagshow: false
		})
	}
	close(fn) {
		this.setState({
			show: false
		})
		if (typeof fn === 'function') {
			fn()
		}
	}
	back() {
		this.close(this.props.callback.bind(this))
	}
	select(city, id) {
		this.close(this.props.callback.bind(this, city, id))
	}
	update(ul) {
		if (ul.dataset.pos) {
			return
		}
		const width = ul.offsetWidth
		const height = ul.offsetHeight
		const left = ul.offsetLeft
		const top = ul.offsetTop
		ul.dataset.pos = JSON.stringify({ width, height, left, top })
		console.log('添加安全区域成功')
	}
	render() {
		const hot = this.cityData ? this.cityData[0].n.map((v, k) => {
			return <dd key={k} onClick={this.select.bind(this, v.n, v.c)}>{v.n}</dd>
		}) : null
		const dl = this.cityData ? this.cityData.slice(1).map((v, k) => {
			return (<dl className="citylist" key={k}>
				<dt data-tag={v.k}>{v.k}</dt>
				{v.n.map((v, k) => <dd key={k} onClick={this.select.bind(this, v.n, v.c)}>{v.n}<span>{v.c}</span></dd>)}
			</dl>)
		}) : null

		const li = this.cityData ? this.cityData.map((v, k) => {
			return <li key={k} data-word={v.k} onClick={this.findTag.bind(this, v.k)}>{v.k}</li>
		}) : null

		const tag = this.state.tagshow ? <div className="tagword">{this.state.tagword}</div> : null

		const div = this.state.show ? (
			<div className="citybox">
				<div className="citybar head">
					<div className="back" onClick={this.back.bind(this)}><i className="iconfont icon-xitongfanhui"></i></div>
					<h1>选择城市</h1>
				</div>
				<div className="inner">
					<dl className="hotcity">
						<dt data-tag="热门城市">热门城市</dt>
						{hot}
					</dl>
					{dl}
				</div>
				<ul className="citynav"
					onTouchMove={this.touchNavMove.bind(this)}
					onTouchEnd={this.touchNavEnd.bind(this)}
					ref="ul"
				>
					{li}
				</ul>
				{tag}
			</div>
		) : null
		return (
			<SweetAnimate
				component="span"
				enter="slideInRight"
				leave="slideOutRight"
				durationEnter={500}
				durationLeave={500}>
				{div}
			</SweetAnimate>
		)
	}
}

export default class extends Component {
	constructor(props) {
		super(props)
		this.state = {
			show1: false,
			show2: false,
			demo1: '选择起飞城市',
			demo2: '选择降落城市',
			toast: {
				show: false
			}
		}
	}
	render() {
		const cityprops1 = {
			cityData: citydata.data,
			show: this.state.show1,
			callback: this.callback1.bind(this)
		}
		const cityprops2 = {
			cityData: citydata.data,
			show: this.state.show2,
			callback: this.callback2.bind(this)
		}
		const oneway = <div>
			<ul className="citycont">
				<li onClick={this.click1.bind(this)}>
					<span>出发城市</span>
					<p>{this.state.demo1}</p>
				</li>
				<li><i className="iconfont icon-feiji"></i></li>
				<li onClick={this.click2.bind(this)}>
					<span>降落城市</span>
					<p>{this.state.demo2}</p>
				</li>
			</ul>
			<div className="abtn" onClick={this.disabledHandler.bind(this)}>查询</div>
		</div>
		const tab = {
			title: ['单程', '往返'],
			cont: [oneway, oneway]
		}
		return (
			<Layout name="CityPicker">
				<div className="citydemo">
					<TabBox {...tab} />
				</div>
				<CityPickerBox {...cityprops1} />
				<CityPickerBox {...cityprops2} />
				<ToastBox {...this.state.toast} hidden={this.hiddenToast.bind(this)} />
			</Layout>
		)
	}
	click1() {
		this.setState({
			show1: true
		})
	}
	callback1(c, i) {
		this.setState({
			show1: false,
			demo1: c ? c : this.state.demo1
		})
	}
	click2() {
		this.setState({
			show2: true
		})
	}
	callback2(c, i) {
		this.setState({
			show2: false,
			demo2: c ? c : this.state.demo2
		})
	}
	disabledHandler() {
		this.setState({
			toast: {
				show: true,
				type: 3,
				text: '暂时不可用',
				time: 800
			}
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