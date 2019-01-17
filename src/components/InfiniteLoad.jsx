import React, {Component} from 'react'
import Layout from './Layout'
import {getJSON} from '../util'
import Code from './Code'

export class InfiniteLoadBox extends Component {
	constructor(props) {
		super(props)
		this.state = {
			enabled: false,
			loaderror: false,
			text: ''
		}
	}
	componentDidMount() {
		this.refs.elem.addEventListener('scroll', this.scrollHandler, !1)
	}
	componentWillUnmount() {
		this.refs.elem.removeEventListener('scroll', this.scrollHandler)
	}
	render() {
		return (
			<div className="infinite-outer">
				<div ref="elem" className="infinite-inner">
					{this.props.children}
					<div className="infinite-icon">
						<p>
							{this.state.loaderror ? this.state.text : <span className="loading"></span>}
						</p>
					</div>
				</div>
			</div>
		)
	}
	scrollHandler = () => {
		if(this.state.enabled) {
			return
		}
		const elem = this.refs.elem
		const elemHeight = elem.offsetHeight
		const childHeight = elem.firstChild.offsetHeight
		if(elemHeight + elem.scrollTop >= childHeight) {
			this.setState({
				enabled: true,
				loaderror: false
			})
			this.props.onLoadMore()
			.then(data => {
				this.setState({
					enabled: false,
					loaderror: false
				})
			}, err => {
				this.setState({
					enabled: false,
					loaderror: true,
					text: err
				})
			})
		}
	}
}

export default class extends Component {
	constructor(props) {
		super(props)
		this.state = {
			page: 1,
			datalist: []
		}
	}
	componentDidMount() {
		const api = `http://www.sweetui.com/demo/api/dataset.php?start=${this.state.page}&count=10`
		getJSON(api).then(data => {
			this.timer = setTimeout(() => {
				this.setState({
					datalist: this.state.datalist.concat(data)
				})
			}, 1000)
		})
	}
	componentWillUnmount() {
		clearTimeout(this.timer)
	}
	render() {
		const lis = this.state.datalist.map((v, k) => {
			return <li key={k}>{v}</li>
		})
const codes1 = `<InfiniteLoadBox
	onLoadMore={this.getData}
>
	<div className={demoStyle}>
		<ul>
			{lis}
		</ul>
	</div>
</InfiniteLoadBox>`
		const demoStyle = this.state.datalist.length ? 'infinitedemo' : 'infinitedemo loading'
		return (
			<Layout name="InfiniteLoad">
				<div className="demoarea">
					<InfiniteLoadBox
						onLoadMore={this.getData.bind(this)}
					>
						<div className={demoStyle}>
							<ul>
								{lis}
							</ul>
						</div>
					</InfiniteLoadBox>
					<div className="line"></div>
					<Code codes={codes1} />
				</div>
			</Layout>
		)
	}
	getData() {
		this.setState({
			page: this.state.page + 10
		})
		const api = `http://www.sweetui.com/demo/api/dataset.php?start=${this.state.page}&count=10`
		return new Promise((resolve, reject) => {
			this.timer = setTimeout(() => {
				getJSON(api).then(data => {
					this.setState({
						datalist: this.state.datalist.concat(data)
					})
					resolve()
				}).catch(e => {
					reject('请求数据失败')
				})
			}, 2000)
		})
	}
}