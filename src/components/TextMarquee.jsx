import React, {Component} from 'react'
import Layout from './Layout'
import Des from './Des'
import Code from './Code'

export default class extends Component {
	render() {
const codes = `const props = {
	direction: 'horizontal', //方向
	data: datas,
	speed: 50 //速度
}`
		const props1 = {
			direction: 'horizontal',
			data: ['秋夜长殊未央', 
			'月明白露澄清光', 
			'层城绮阁遥相望'],
			speed: 50
		}
		const props2 = {
			direction: 'vertical',
			data: ['秋夜长殊未央', 
			'月明白露澄清光', 
			'层城绮阁遥相望', 
			'遥相望川无梁',
			'北风受节南雁翔',
			'崇兰委质时菊芳'],
			speed: 100
		}
		return (
			<Layout name="TextMarquee">
				<div className="demoarea">
					<Code codes={codes} />
				</div>
				<Des info="横向滚动演示 <TextMarquee {...props} />" />
				<TextMarquee {...props1} />
				<Des info="垂直滚动演示" />
				<TextMarquee {...props2} />
				
			</Layout>
		)
	}
}

class TextMarquee extends Component {
	constructor(props) {
		super(props)
		this.state = {
			ulX: 0,
			ulY: 0
		}
	}
	componentWillMount() {
		this.requestId = null
	}
	componentDidMount() {
		this.textMove()
	}
	render() {
		const data = this.props.data
		let ulStyle, liStyle, lis
		if(this.props.direction === 'horizontal') {
			ulStyle = {
				display: 'flex',
				width: `${data.length * 200}%`,
				transform: `translateX(${-this.state.ulX}%)`
			}
			liStyle = {
				width: `${100 / data.length}%`
			}
			lis = data.map((v, k) => {
				return <li style={liStyle} key={k}>{v}</li>
			})
		} else {
			ulStyle = {
				height: `${data.length * 200}%`,
				transform: `translateY(${-this.state.ulY}%)`
			}
			lis = data.map((v, k) => {
				return <li key={k}>{v}</li>
			})
		}
		return (
			<div className="marqueebox">
				<ul 
					style={ulStyle} 
					onTouchStart={this.touchStart}
					onTouchEnd={this.touchEnd}
				>
					{lis}{lis}
				</ul>
			</div>
		)
	}
	componentWillUnmount() {
		cancelAnimationFrame(this.requestId)
	}
	textMove() {
		if(this.props.direction === 'horizontal') {
			if(this.state.ulX < 50) {
				this.setState({
					ulX: this.state.ulX + this.props.speed / 1000
				})
			} else {
				this.setState({
					ulX: 0
				})
			}
		} else {
			if(this.state.ulY < 50) {
				this.setState({
					ulY: this.state.ulY + this.props.speed / 1000
				})
			} else {
				this.setState({
					ulY: 0
				})
			}
		}
		this.requestId = requestAnimationFrame(this.textMove.bind(this))
	}
	touchStart() {
		cancelAnimationFrame(this.requestId)
	}
	touchEnd() {
		requestAnimationFrame(this.textMove.bind(this))
	}
}