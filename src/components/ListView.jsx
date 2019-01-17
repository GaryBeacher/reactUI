import React, {Component} from 'react'
import SweetGesture from './SweetGesture'

export default class ListView extends Component {
	constructor(props) {
		super(props)
		this.state = {
			enabled: false,
			loaderror: false,
			text: '',
			contentStyle: '',
			cur: 0
		}
	}
	componentDidMount() {
		this.refs.elem.addEventListener('scroll', this.scrollHandler, !1)
	}
	componentWillUnmount() {
		this.refs.elem.removeEventListener('scroll', this.scrollHandler)
	}
	render() {
		const {dataSource, renderRow, showGesture} = this.props
		const lists = showGesture ? dataSource.map((v, k) => {
			return (
				<SweetGesture 
					key={k}
					onSwipeLeft={this.swipeLeft.bind(this, k)}
					onSwipeRight={this.swipeRight.bind(this, k)}
				>
					<li>
						<div className={`content ${k === this.state.cur ? this.state.contentStyle : ''}`}>
							{renderRow(v)}
						</div>
						<div className="action" onClick={this.deleteItem.bind(this, k)}>
							<i className="iconfont icon-shanchu"></i>
						</div>
					</li>
				</SweetGesture>
			)
		}) : dataSource.map((v, k) => <li key={k}><div className="content">{renderRow(v)}</div></li>)
		return (
			<div className="listview-outer">
				<div ref="elem" className="listview-inner">
					<ul className="listview">
						{lists}
					</ul>
					<div className="listview-more">
						<p>
							{this.state.loaderror ? this.state.text : <span className="loading"></span>}
						</p>
					</div>
				</div>
			</div>
		)
	}
	deleteItem(key) {
		if(this.props.showGesture) {
			this.props.actionCallback(key)
			this.setState({
				contentStyle: '',
				cur: 0
			})
		}
	}
	swipeLeft(key) {
		if(this.state.contentStyle !== 'current') {
			this.setState({
				contentStyle: 'current',
				cur: key
			})
		}
	}
	swipeRight() {
		if(this.state.contentStyle !== '') {
			this.setState({
				contentStyle: '',
				cur: 0
			})
		}
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
			this.props.onEndReached()
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