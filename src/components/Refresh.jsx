import React, {Component} from 'react'
import Layout from './Layout'
import SweetGesture from './SweetGesture'
import Code from './Code'
import {getJSON} from '../util'

export class SweetRefresh extends Component {
	constructor(props) {
		super(props)
		this.state = {
			distance: 0,
			enabled: false,
			duration: 0,
			resistance: props.resistance || 2.5,
			isloading: false
		}
	}
	render() {
		const loadStyle = {
			transform: `translate3d(0, ${this.state.distance}px, 0)`
		}
		const innerStyle = {
			transform: `translate3d(0, ${this.state.distance}px, 0)`,
			WebkitTransitionDuration: `${this.state.duration}ms`
		}
		const loading = this.state.isloading ? 'loading' : 'loading pause'
		return (
			<div className="refresh-outer" onTouchMove={e => e.preventDefault()}>
				<div className="refresh-load" style={loadStyle}>
					<span className={loading}></span>
				</div>
				<SweetGesture
					onPanStart={this.panstart.bind(this)}
					onPanDown={this.pandown.bind(this)}
					onPanUp={this.panup.bind(this)}
					onPanEnd={this.panend.bind(this)}
					direction='DIRECTION_VERTICAL'
				>
					<div className="refresh-inner" style={innerStyle}>
						{this.props.children}
					</div>
				</SweetGesture>
			</div>
		)
	}
	panstart(e) {
		this.setState({
			enabled: true,
			duration: 0
		})
	}
	pandown(e) {
		if(!this.state.enabled) {
			return
		}
		e.preventDefault()
		this.setState({
			distance: e.distance / this.state.resistance,
		})
	}
	panup(e) {
		if(!this.state.enabled || this.state.distance === 0) {
			return
		}
		e.preventDefault()
		if(this.state.distance < e.distance / this.state.resistance) {
			this.setState({
				distance: 0
			})
		} else {
			this.setState({
				distance: e.distance / this.state.resistance
			})
		}
	}
	panend(e) {
		if(!this.state.enabled) {
			return
		}
		e.preventDefault()
		if(this.state.distance >= 60) {
			this._loading()
		} else {
			this._loadend()
		}
		this.setState({
			enabled: false,
			duration: 200
		})
	}
	_loading() {
		this.setState({
			distance: 60,
			isloading: true
		})
		this.props.onRefresh().then(data => {
			this._loadend()
		}, err => {
			this._loadend()
		})

	}
	_loadend() {
		this.setState({
			distance: 0,
			isloading: false
		})
	}
}

export default class extends Component {
	constructor(props) {
		super(props)
		this.state = {
			text: '下拉刷新内容'
		} 
	}
	render() {
const codes1 = `<SweetRefresh
	//下拉刷新回调函数
	onRefresh={this.refresh}
	//下拉阻尼系数，默认2.5
	resistance={3}
>
	<div className="mydemo">
		{this.state.text}
	</div>
</SweetRefresh>`
const codes2 = `refresh() {
	//要返回一个Promise
	return new Promise((resolve, reject) => {
		ajax('/api/hero').then(data => {
			if(data.code === 1) {
				this.setState({
					text: data.content
				})
				//须手动调用
				resolve()
			} else {
				this.setState({
					text: '再次试试~'
				})
				//须手动调用
				reject()
			}
		}).catch(e => {
			this.setState({
				text: '请求数据失败'
			})
			//须手动调用
			reject()
		})
    })
}`
		return (
			<Layout name="Refresh">
				<div className="demoarea">
					<SweetRefresh
						onRefresh={this.refresh.bind(this)}
						resistance={3}
					>
						<div className="refreshdemo">{this.state.text}</div>
					</SweetRefresh>
					<div className="line"></div>
					<Code codes={codes1} />
					<div className="line"></div>
					<Code codes={codes2} />
				</div>
			</Layout>
		)
	}
	componentWillUnmount() {
		clearTimeout(this.timer)
	}
	refresh() {
		return new Promise((resolve, reject) => {
			this.timer = setTimeout(() => {
				getJSON('http://www.sweetui.com/demo/api/hero.php').then(data => {
					if(data.code === 1) {
						this.setState({
							text: data.content
						})
						resolve()
					} else {
						this.setState({
							text: '再次试试~'
						})
						reject()
					}
				}).catch(e => {
					this.setState({
						text: '请求数据失败'
					})
					reject()
				})
			}, 2000)
	    })
	}
}