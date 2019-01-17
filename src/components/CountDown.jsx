import React, {Component} from 'react'
import Layout from './Layout'
import Des from './Des'
import Code from './Code'
import {DialogBox} from './Dialog'

export class CountDownBox extends Component {
	constructor(props) {
		super(props)
		this.state = {
			days: '00',
			hours: '00',
			minutes: '00',
			seconds: '00'
		}
	}
	componentWillMount() {
		this.timer = null
		this.loopTime()
	}
	componentWillUnmount() {
		clearInterval(this.timer)
	}
	render() {
		return (
			<div className="countdown">
				<div><span>{this.state.days}</span>天</div>
				<div><span>{this.state.hours}</span>时</div>
				<div><span>{this.state.minutes}</span>分</div>
				<div><span>{this.state.seconds}</span>秒</div>
			</div>
		)
	}
	loopTime() {
		this.timer = setInterval(() => {
			this.getTime(Date.now())
			if(~~this.interval(Date.now()) <= 0) {
				if(this.props.callback) {
					this.props.callback()
				}
				this.setState({
					days: '00',
					hours: '00',
					minutes: '00',
					seconds: '00'
				})
				clearInterval(this.timer)
				return
			}
		}, 1000)
	}
	interval(now) {
		const date = this.props.endtime.replace(/[-\s:\/\.：]/g, ',').replace(/(.{5})(\d{2})/, (v, v1, v2) => v1 + (v2 - 1)).split(',').map(v => +v)
		const timeStamp = new Date(...date).getTime()
		const interval = (timeStamp - now) / 1000
		return interval
	}
	n2s(n) {
		return n > 9 ? n : `0${n}`
	}
	getTime(now) {
		const interval = this.interval(now)
		const days = this.n2s(~~(interval / 86400))
		const allSeconds = (interval / 86400 - ~~(interval / 86400)) * 86400
		const hours = this.n2s(~~(allSeconds / 3600))
		const minutes = this.n2s(~~(allSeconds / 60 - hours * 60))
		const seconds = this.n2s(~~(allSeconds - hours * 60 * 60 - minutes * 60))
		this.setState({days, hours, minutes, seconds})
	}
}

export default class CountDown extends Component {
	constructor(props) {
		super(props)
		this.state = {
			infos: {
				title: '',
				content: '',
			}
		}
	}
	render() {
		const codes = `<CountDownBox 
	endtime="2019-12-25 00:00:00" 
	callback={倒计时完成回调函数} 
/>`
		return (
			<Layout name="CountDown">
				<Des info="距离圣诞节还有" />
				<div className="demoarea">
					<CountDownBox endtime="2019-12-25 00:00:00" callback={this.timeEnd.bind(this)} />
					<div className="line"></div>
					<Code codes={codes} />
					<DialogBox {...this.state.infos} />
				</div>
			</Layout>
		)
	}
	timeEnd() {
		this.setState({
			infos: {
				title: '≥▽≤',
				content: `倒计时完成！`
			}
		})
	}
}