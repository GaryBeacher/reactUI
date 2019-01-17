import React, {Component} from 'react'
import Layout from './Layout'
import SweetGesture from './SweetGesture'
import Des from './Des'
import Code from './Code'
import {ToastBox} from './Toast'

export default class extends Component {
	constructor(props) {
		super(props)
		this.state = {
			toast: {
				show: false
			}
		}
	}
	render() {
		const lis = ['onTap', 'onSwipe', 'onDoubleTap', 'onPress', 'onPan', 'onRotate', 'onPinch'].map((v, k) => {
			const value = v.slice(2)
			const props = {
				[v]: this.showGesture.bind(this, value),
				options: {
					recognizers: {
						[value.toLowerCase()]: {enable: true}
					}
				}
			}
			return (
				<SweetGesture {...props} key={k}>
					<li>
						<h3>{value}</h3>
						<p><img src={require(`../assets/gesture/${v.slice(2).toLowerCase()}.svg`)} alt=""/></p>
					</li>
				</SweetGesture>
			)
		})
		const codes = `<SweetGesture
	onTap={tapfunc}
	onPinch={pinchfunc}
	options: {
		recognizers: {
			//pinch: {enable: true}
		}
	}
	...
>
	<div>tap me..</div>
</SweetGesture>`
		return (
			<Layout name="手指操作事件">
				<Des info="本组件使用的是hamerjs插件，需要npm安装才能使用，具体文档查看https://www.cnblogs.com/qianduanjingying/p/5812139.html" />
				<Des info="双指操作默认不开启，可以在SweetGesture的options属性配置中开启" />
				<div className="gesture demoarea">
					<Code codes={codes} />
					<ul>{lis}</ul>
				</div>
				<ToastBox {...this.state.toast} time={600} hidden={this.hidden.bind(this)} />
			</Layout>
		)
	}
	showGesture(name) {
		this.setState({
			toast: {
				show: true,
				type: 2,
				text: name
			}
		})
	}
	hidden() {
		this.setState({
			toast: {
				show: false
			}
		})
	}
}