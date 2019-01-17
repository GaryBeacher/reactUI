import React, {Component} from 'react'
import {browserHistory} from 'react-router'

export default class Head extends Component {
	constructor(props) {
		super(props)
		this.backHandler = this.backHandler.bind(this)
	}
	render() {
		return (
			<header className="head">
				{(() => {
					if(this.props.back) {
						return (
							<span className="back" onClick={this.backHandler}>
								<i className="iconfont icon-xitongfanhui"></i>
							</span>
						)
					}
				})()}
				<h1>{this.props.name}</h1>
				{(() => {
					const right = this.props.right
					if(right) {
						return (
							<span className="right" onClick={right.callback}>
								<i className={`iconfont icon-${right.icon}`}></i>
							</span>
						)
					}
				})()}
			</header>
		)
	}
	backHandler() {
		browserHistory.goBack()
	}
}