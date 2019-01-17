import React, { Component } from 'react'
import Layout from './Layout'
import Code from './Code'
import SweetAnimate from './SweetAnimate'

export default class Animate extends Component {
	constructor(props) {
		super(props)
		this.state = {
			show: true,
			animateName: ''
		}
	}
	componentDidMount() {
		this.run = false
	}
	render() {
		const div = this.state.show ? <div className="demo">看我</div> : ''
		const lis=[
			{name:'bounceIn',tag:'蹦蹦跳跳'},
			{name:'flash',tag:'闪烁'},
			{name:'pulse',tag:'脉动'},
			{name:'rubberBand',tag:'橡皮筋'},
			{name:'shake',tag:'摇动'},
			{name:'swing',tag:'摆动'},
			{name:'tada',tag:'波动辐射'},
			{name:'wobble',tag:'颤动'},
			{name:'jello',tag:'果冻'},
			{name:'bounceInLeft',tag:'左侧弹出'},
			{name:'fadeIn',tag:'渐入'},
			{name:'fadeInLeft',tag:'左侧渐入'},
			{name:'flipInX',tag:'翻转'},
			{name:'lightSpeedIn',tag:'光速'},
			{name:'rotateIn',tag:'旋转'},
			{name:'slideInLeft',tag:'左侧滑入'},
			{name:'slideInRight',tag:'右侧滑入'},
			{name:'slideOutLeft',tag:'左侧滑出'},
			{name:'slideOutRight',tag:'右侧滑出'},
			{name:'zoomIn',tag:'快速'},
		].map((v, k) => {
			return <li key={k} onClick={this.setAnimate.bind(this, v.name)}>{v.tag}</li>
		})
		const codes = `这个组件动画效果采用了ReactCSSTransitionGroup
可以访问这个地址查看原理
 https://www.jianshu.com/p/52a8bdbd2acf

 
<SweetAnimate
	enter="fadeIn"		 //进入状态
	leave="fadeOut"		 //消失状态
	durationEnter={1000} //进入持续时间
	durationLeave={1000} //消失持续时间
>
	<div>动画主体</div>
</SweetAnimate>`
		return (
			<Layout name="动画效果">
				<div className="animatedemo">
					<Code codes={codes} />
					<div className="line"></div>
					<SweetAnimate
						component="span"
						enter={this.state.animateName}
						leave={this.state.animateName}
						durationEnter={1000}
						durationLeave={1000}
					>
						{div}
					</SweetAnimate>
					<ul>
						{lis}
					</ul>
				</div>
			</Layout>
		)
	}
	setAnimate(animateName) {
		if (this.run) {
			return
		}
		this.run = true
		this.setState({
			show: false,
			animateName
		}, () => {
			this.setState({ show: true })
		})
		setTimeout(() => this.run = false, 2000)
	}
}