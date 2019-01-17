import React, {Component} from 'react'

export default class Des extends Component {
	render() {
		return (
			<div className="des">
				<p>{this.props.info}</p>
			</div>
		)
	}
}