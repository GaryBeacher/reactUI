import React, {Component} from 'react'
import Layout from './Layout'
import Des from './Des'

export class ProgressBox extends Component {
	render() {
		const {type, width, height, percent, stroke, innerColor, outerColor} = this.props
		return (
			<div className="progress">
				{type === 'circle' ? (
					<div className="circle">
						<svg width={width} height={width}>
						    <circle 
						    	cx={`${width / 2}`}
						    	cy={`${width / 2}`} 
						    	r={`${width / 2 - stroke}`}
						    	strokeWidth={stroke}
						    	stroke={innerColor} fill="none">
						    </circle>
						    <circle 
						    	cx={`${width / 2}`}
						    	cy={`${width / 2}`} 
						    	r={`${width / 2 - stroke}`}
						    	strokeWidth={stroke}
						    	stroke={outerColor} 
						    	transform={`rotate(-90) translate(-${width}, 0)`}
						    	strokeDasharray={`${percent / 100 * Math.PI * 2 * (width / 2 - stroke)} ${Math.PI * 2 * (width / 2 - stroke)}`}
						    	strokeLinecap="round" fill="none">
						    </circle>
						    <text x="50%" y="58%">
								<tspan 
									fill={outerColor} 
									textAnchor="middle"
									style={{fontSize: `${width / 5 > 12 ? width / 5 : 12}px`}}>{percent}%</tspan>
							</text>
						</svg>
					</div>
				) : (<div className="xline" style={{height: height + 'px'}}>
						<div className="inner" style={{width: percent + '%'}}></div>
					</div>)
				}
			</div>
		)
	}
}

export default class extends Component {
	constructor(props) {
		super(props)
		this.state = {
			demo1: {
				type: 'line',
				height: 4,
				percent: 0
			},
			demo2: {
				type: 'line',
				height: 5,
				percent: 0
			},
			demo3: {
				type: 'line',
				height: 6,
				percent: 0
			},
			demo4: {
				type: 'circle',
				width: 40,
				stroke: 4,
				innerColor: '#eee',
				outerColor: '#FF5734',
				percent: 0
			},
			demo5: {
				type: 'circle',
				width: 50,
				stroke: 5,
				innerColor: '#eee',
				outerColor: '#FF5734',
				percent: 0
			},
			demo6: {
				type: 'circle',
				width: 60,
				stroke: 6,
				innerColor: '#eee',
				outerColor: '#FF5734',
				percent: 1
			},
		}
	}
	componentWillMount() {
		this.timer = null
	}
	componentWillUnmount() {
		clearInterval(this.timer)
	}
	componentDidMount() {
		setTimeout(() => {
			this.setState({
				demo1: {
					percent: 50
				},
				demo4: Object.assign(this.state.demo4, {percent: 50})
			})
		}, 1000)
	}
	render() {
		return (
			<Layout name="Progress Bar">
				<Des info="<ProgressBox {...this.state.demo} />" />
				<div className="demoarea">
					<ProgressBox {...this.state.demo1} />
					<div className="line"></div>
					<ProgressBox {...this.state.demo4} />
					<div className="line"></div>
					<div className="btn" onClick={this.fn1.bind(this)}>点我加载进度{this.state.demo2.percent}%</div>
					<div className="line"></div>
					<ProgressBox {...this.state.demo2} />
					<div className="line"></div>
					<div className="btn" onClick={this.fn2.bind(this)}>点我加载进度{this.state.demo3.percent}%</div>
					<div className="line"></div>
					<ProgressBox {...this.state.demo3} />
					<div className="line"></div>
					<div className="btn" onClick={this.fn3.bind(this)}>点我加载进度{this.state.demo5.percent}%</div>
					<div className="line"></div>
					<ProgressBox {...this.state.demo5} />
					<div className="line"></div>
					<div className="btn" onClick={this.fn4.bind(this)}>点我加载进度{this.state.demo6.percent}%</div>
					<div className="line"></div>
					<ProgressBox {...this.state.demo6} />
				</div>
			</Layout>
		)
	}
	fn1() {
		this.timer = setInterval(() => {
			if(this.state.demo2.percent === 100) {
				clearInterval(this.timer)
				return
			}
			this.setState({
				demo2: {
					percent: this.state.demo2.percent + 1
				}
			})
		}, 50)
	}
	fn2() {
		this.setState({
			demo3: {
				percent: 100
			}
		})
	}
	fn3() {
		this.timer = setInterval(() => {
			if(this.state.demo5.percent === 100) {
				clearInterval(this.timer)
				return
			}
			this.setState({
				demo5: Object.assign(this.state.demo5, {percent: this.state.demo5.percent + 1})
			})
		}, 50)
	}
	fn4() {
		this.setState({
			demo6: Object.assign(this.state.demo6, {percent: 100})
		})
	}
}