import React, {Component, PropTypes} from 'react'
import Layout from './Layout'
import ListView from './ListView'
import {getJSON} from '../util'


export default class List extends Component {
	static contextTypes = {
	    router: PropTypes.object,
	}
	constructor(props) {
		super(props)
		this.state = {
			dataSource: [],
			page: 1
		}
	}
	componentDidMount() {
		const api = `http://www.sweetui.com/demo/api/dataset.php?start=${this.state.page}&count=15`
		getJSON(api).then(data => {
			this.setState({
				dataSource: this.state.dataSource.concat(data)
			})
		})
	}
	componentWillUnmount() {
		clearTimeout(this.timer)
	}
	render() {
		return (
			<Layout name="ListView">
				<ListView
					dataSource={this.state.dataSource}
					renderRow={rowData => <div className="listdemo" onClick={this.routerTo.bind(this, rowData)}><h2>{rowData}</h2></div>}
					onEndReached={this.getData.bind(this)}
					showGesture={true}
					actionCallback={this.getCallback.bind(this)}
				/>
			</Layout>
		)
	}
	routerTo(id) {
		this.context.router.push(`/demo/list/${id.replace(/\D/g, '')}`)
	}
	getCallback(key) {
		this.state.dataSource.splice(key, 1)
	}
	getData() {
		this.setState({
			page: this.state.page + 15
		})
		const api = `http://www.sweetui.com/demo/api/dataset.php?start=${this.state.page}&count=15`
		return new Promise((resolve, reject) => {
			this.timer = setTimeout(() => {
				getJSON(api).then(data => {
					this.setState({
						dataSource: this.state.dataSource.concat(data)
					})
					resolve()
				}).catch(e => {
					reject('请求数据失败')
				})
			}, 500)
		})
	}
}

