import React, {Component} from 'react'
import Layout from './Layout'
import Code from './Code'

export class SliderBox extends Component {
	constructor(props) {
		super(props)
		this.state = {
			width: 0,
			left: 0,
			step: props.step || 1
		}
	}
	componentWillMount() {
		const values = []
		const {max, min, value} = this.props
		for(let i = 0; i <= max - min && value - i >= min; i += this.state.step) {
			values.push(value - i)
		}
		for(let i = 0; i <= max - min && value + i <= max; i += this.state.step) {
			values.push(value + i)
		}
		this.result = value
		this.values = Array.from(new Set(values.sort((a, b) => a - b)))
	}
	componentDidMount() {
		const width = Math.ceil(100 / (this.props.max - this.props.min) * (this.props.value - this.props.min))
		this.setState({
			width,
			left: width
		}, () => {
			this.sliderWidth = this.refs.slider.offsetWidth
		})
	}
	shouldComponentUpdate(nextProps, nextState) {
		if(this.state.width === nextState.width) {
			return false
		}
		return true
	}
	start(e) {
		this.sLeft = this.state.left * this.sliderWidth / 100
		this.sX = e.touches[0].pageX
	}
	move(e) {
		let dist = this.sLeft + e.changedTouches[0].pageX - this.sX, value
		
		dist = dist < 0 ? 0 : dist > this.sliderWidth ? this.sliderWidth : dist

		const width = Math.ceil(dist / this.sliderWidth * 100)
		this.setState({
			width,
			left: width
		})
		value = Math.ceil(dist / this.sliderWidth * (this.props.max - this.props.min)) + this.props.min
		this.result = this.values.includes(value) ? value : this.result
		this.props.callback(this.result)
		e.preventDefault()
	}
	render() {
		const trackStyle = {width: `${this.state.width}%`}
		const handlerStyle = {left: `${this.state.left}%`}
		return (
			<div className="sliderwrap">
				<div className="slider" ref="slider">
					<div className="slidertrack" style={trackStyle}></div>
					<div className="sliderhandler" 
						onTouchStart={this.start.bind(this)} 
						onTouchMove={this.move.bind(this)} 
						style={handlerStyle}
					>
					</div>
				</div>
			</div>
		)
	}
}

export default class Slider extends Component {
	constructor(props) {
		super(props)
		this.state = {
			clip: `inset(0 50% 0 0)`
		}
	}
	render() {
		const slider = {
			max: 100,
			min: 0,
			step: 1,
			value: 50,
			callback: this.callback.bind(this)
		}
		const imgStyle = {
			WebkitClipPath: this.state.clip
		}
		const codes = `const slider = {
	max: 100,
	min: 0,
	step: 1,
	value: 50,
	callback: this.callback.bind(this)
}
<SliderBox {...slider} />`
		return (
			<Layout name="Slider">
				<div className="demoarea sliderdemo1">
					<div className="imgslider">
						<div>
							<img style={imgStyle} src={require('../assets/xhjy.jpg')} alt="" />
						</div>
						<img src={require('../assets/xhjy.jpg')} alt="" />
					</div>
					<SliderBox {...slider} />
					<div className="line"></div>
					<Code codes={codes} />
				</div>
			</Layout>
		)
	}
	callback(value) {
		//console.log(value)
		this.setState({
			clip: `inset(0 ${100 - value}% 0 0)`
		})
	}
}