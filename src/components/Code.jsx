import React, {Component} from 'react'

export default class Code extends Component {
	render() {
		return (
			<div className="code">
				<pre>{this.props.codes}</pre>
			</div>
		)
	}
}