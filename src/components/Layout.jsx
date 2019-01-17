import React, {Component} from 'react'
import Head from './Head'

export default class Layout extends Component {
	render() {
		return (
			<div className="layout">
				<Head name={this.props.name} back={this.props.back === false ? false : true} right={this.props.right} />
				{this.props.children}
			</div>
		)
	}
}