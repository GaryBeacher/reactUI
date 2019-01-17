import React, {Component} from 'react'
import Layout from './Layout'
import SweetAnimate from './SweetAnimate'
import {timeFormat, time2md, time2w, timeStamp} from '../util'
import {TabBox} from './Tab'
import {ToastBox} from './Toast'
import calendar from '../plugins/calendar'

export class DatePickerBox extends Component {
	monthArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
	constructor(props) {
		super(props)
		this.state = {
			show: false,
			start: props.start,
			end: props.end,
			count: 0,
			intervals: []
		}
	}
	componentWillReceiveProps(nextProps) {
		if(nextProps.show) {
			this.setState({
				show: true,
				start: nextProps.start,
				end: nextProps.end
			})
		}
    }
    componentDidUpdate() {
    	const id = this.state.start.slice(0, 7)
    	const elem = document.getElementById(id)
		if(elem) {
			elem.scrollIntoView()
		}
	}
	render() {
		const div = this.state.show ? (<div className="datepicker">
				<div className="datebar head">
					<div className="back" onClick={this.back.bind(this)}><i className="iconfont icon-xitongfanhui"></i></div>
					<h1>{this.props.type === 1 ? '日历' : '去程返程日期'}</h1>
				</div>
				<ul className="weekbar">
					<li>日</li><li>一</li><li>二</li><li>三</li><li>四</li><li>五</li><li>六</li>
				</ul>
				{this.createDom()}
				{this.props.type === 2 ? this.state.count === 0 
					? <div className="plytext animated shake">请选择去程日期</div> 
					: <div className="plytext">请选择返程日期</div> 
					: null}
			</div>) : null
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
	getLunarCalendar() {
		const days = {}
		const holidays = {
			'1-1': '春节',
			'12-30': '除夕',
			'1-15': '元宵节',
			'5-5': '端午节',
			'7-7': '七夕',
			'8-15': '中秋节',
			'9-9': '重阳节',
			'12-8': '腊八节',
			'12-23': '小年'
		}
		const year = +this.props.now.substr(0, 4)
		
		for(let y = 0; y < 2; y++) {
			for(let date in holidays) {
				if(holidays.hasOwnProperty(date)) {
					const md = date.split('-')
					const day = calendar.lunar2solar(year + y, +md[0], +md[1])
					days[`${day.cYear}-${day.cMonth}-${day.cDay}`] = holidays[date]
				}
			}
		}
		
		//console.log(days)
		return days
	}
	addYear(holidays) {
		const days = {}
		const year = +this.props.now.substr(0, 4)
		for(let y = 0; y < 2; y++) {
			for(let date in holidays) {
				if(holidays.hasOwnProperty(date)) {
					days[`${year + y}-${date}`] = holidays[date]
				}
			}
		}
		return days
	}
	createDom() {
		const date = this.props.now.split('-')
		this.year = parseInt(date[0], 10)
		this.month = parseInt(date[1], 10)
		this.day = parseInt(date[2], 10)
		this.months = this.props.months + 1 || 7
		
		const holidays = {
			'10-1': '国庆节',
			'5-1': '劳动节',
			'12-24': '平安夜',
			'12-25': '圣诞节',
			'1-1': '元旦',
			'2-14': '情人节',
			'3-8': '妇女节',
			'6-1': '儿童节',
		}
		const specialDay = Object.assign({}, this.addYear(holidays), this.getLunarCalendar(), this.props.specialDay)

		const months = [...Array(this.months)].map((v, k) => {
			const year = this.month + k > 12 ? this.year + 1 : this.year
			const month = this.month + k > 12 ? this.month + k - 12 : this.month + k
			return <div key={k}>{this.createMonth(year, month, specialDay)}</div>
		})
		return <div className="monthlist">{months}</div>
	}
	createMonth(year, month, specialDay) {
		year = parseInt(year, 10)
		month = parseInt(month, 10)

		const dayLength = this.isLeap(year) && month === 2 ? this.monthArr[month - 1] + 1 : this.monthArr[month - 1]
		const emptyLi = [...Array(new Date(year, month - 1, 1).getDay())]
						.map((v, k) => <li key={k}></li>)
		const dayLi = [...Array(dayLength)].map((v, k) => {
			const day = year + '-' + month + '-' + (k + 1)
			const sday = day in specialDay ? <em>{specialDay[day]}</em> : null
			const thisDate = this.date2Str(year, month, k + 1)
			const isStartDay = this.state.start === thisDate
			const isEndDay = this.props.type !== 1 
							&& this.state.count === 0
							&&  this.state.end === thisDate
			const isInterval = this.props.type !== 1 
							&& this.state.count === 0
							&& this.state.intervals.some(value => value === thisDate)

			if(year === this.year && month === this.month) {
				const disabled = k + 1 < this.day
				return <li 
							key={k} 
							className={disabled ? 'disabled' : 
										isStartDay || isEndDay ? 'on' : 
										isInterval ? 'interval' : null}
							onClick={!disabled ? this.selectDay.bind(this, {year, month, day: k + 1}) : null}
						>
							{this.props.now === this.date2Str(year, month, k + 1) ? <span>今天</span> : null}
							{k+1}
							{sday}
						</li>
			}else if((year === this.year && month - this.month === this.months - 1)
				|| (year > this.year && this.month + this.months === month + 13)) {
				const disabled = k + 1 > this.day
				return <li 
							key={k} 
							className={disabled ? 'disabled' : 
										isStartDay || isEndDay ? 'on' : 
										isInterval ? 'interval' : null}
							onClick={!disabled ? this.selectDay.bind(this, {year, month, day: k + 1}) : null}
						>
							{k+1}
							{sday}
						</li>
			}
			return <li 
						key={k} 
						className={isStartDay || isEndDay ? 'on' : isInterval ? 'interval' : null}
						onClick={this.selectDay.bind(this, {year, month, day: k + 1})}
					>
						{k+1}
						{sday}
					</li>
		})

		return (
			<dl>
				<dt id={`${year}-${month < 10 ? '0' + month : month}`}>{year}年{month}月</dt>
				<dd>
					<ul>{emptyLi}{dayLi}</ul>
				</dd>
			</dl>
		)
	}
	isLeap(year) {
		if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
			return true
		} else {
			return false
		}
	}
	selectDay(date) {
		const {year, month, day} = date
		const dateStr = this.date2Str(year, month, day)
		
		if(this.props.type === 1) {
			this.setState({
				start: dateStr,
				end: dateStr,
				intervals: []
			}, () => {
				this.close(this.props.callback.bind(this, {
					start: dateStr,
					end: this.state.start
				}))
			})
		} else {
			if(this.state.count === 0) {
				this.setState({
					start: dateStr,
					count: this.state.count + 1
				})
			} else {
				this.showInterval(this.state.start, dateStr)
			}
		}
	}
	showInterval(start, end) {
		if(timeStamp(end) < timeStamp(start)) {
			this.setState({
				start: end,
				end: end,
				count: 1,
				intervals: []
			})
		} else {
			this.setState({
				start: start,
				end: end,
				count: 0
			}, () => {
				this.getIntervals(this.state.start, this.state.end)
			})
		}
	}
	getIntervals(start, end) {
		const intervals = []
		const spacing = timeStamp(end) - timeStamp(start)
		let i = 1
		while((spacing - i * 1000 * 60 * 60 * 24) > 0) {
			intervals.push(timeFormat(timeStamp(start) + (i++) * 1000 * 60 * 60 * 24))
		}
		this.setState({
			intervals
		}, () => {
			this.close(this.props.callback.bind(this, {
				start: this.state.start,
				end: this.state.end
			}))
		})
	}
	date2Str(year, month, day) {
		const m = month > 9 ? month : '0' + month
		const d = day > 9 ? day : '0' + day
		return year + '-' + m + '-' + d
	}
	back() {
		this.close(this.props.callback.bind(this, {
			start: this.state.start,
			end: this.state.end
		}))
	}
	close(fn) {
		this.setState({
			show: false
		})
		if(typeof fn === 'function') {
			fn()
		}
	}
}

export default class extends Component {
	constructor(props) {
		super(props)
		this.state = {
			datepicker: {
				show: false,
				type: 1,
				now: timeFormat(Date.now()),
				start: timeFormat(Date.now()),
				end: timeFormat(Date.now())
			},
			toast: {
				show: false
			}
		}
	}
	render() {
		const datepicker = this.state.datepicker
		const props = Object.assign(datepicker, {
			months: 12
		})
		const oneway = <div>
			<ul className="datecont" onClick={this.onewayHandler.bind(this)}>
				<li>
					{time2md(datepicker.start)}
					<span>{time2w(datepicker.start)}</span>
				</li>
			</ul>
			<div className="abtn" onClick={this.disabledHandler.bind(this)}>开始搜索</div>
		</div>
		const ply = <div>
			<ul className="datecont" onClick={this.plyHandler.bind(this)}>
				<li>
					{time2md(datepicker.start)}
					<span>{time2w(datepicker.start)}</span>
				</li>
				<li>
					{time2md(datepicker.end)}
					<span>{time2w(datepicker.end)}</span>
				</li>
			</ul>
			<div className="abtn" onClick={this.disabledHandler.bind(this)}>开始搜索</div>
		</div>
		const tab = {
			title: ['单程', '往返'],
			cont: [oneway, ply]
		}
		return (
			<Layout name="DatePicker">
				<div className="datepickerdemo">
					<TabBox {...tab} />
				</div>
				<DatePickerBox {...props} callback={this.callback.bind(this)} />
				<ToastBox {...this.state.toast} hidden={this.hiddenToast.bind(this)} />
			</Layout>
		)
	}
	onewayHandler() {
		this.setState({
			datepicker: {
				show: true,
				type: 1,
				now: timeFormat(Date.now()),
				start: this.state.datepicker.start,
				end: this.state.datepicker.end
			}
		})
	}
	plyHandler() {
		this.setState({
			datepicker: {
				show: true,
				type: 2,
				now: timeFormat(Date.now()),
				start: this.state.datepicker.start,
				end: this.state.datepicker.end
			}
		})
	}
	callback(date) {
		this.setState({
			datepicker: {
				show: false,
				start: date.start,
				end: date.end
			}
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