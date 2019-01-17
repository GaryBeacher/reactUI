import React, {Component} from 'react'
import Layout from './Layout'

export default class extends Component {
	render() {
		return (
			<Layout name="404">
				<div className="errorpage">
					<div className="e404">NOT FOUND</div>
				</div>
			</Layout>
		)
	}
}