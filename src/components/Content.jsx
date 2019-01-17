import React, {Component, PropTypes} from 'react'
import Layout from './Layout'

export default class extends Component {
	static contextTypes = {
	    router: PropTypes.object,
	}
	constructor(props) {
		super(props)
		this.state = {
			id: ''
		}
	}
	componentWillMount() {
		this.setState({
			id: this.context.router.params.id
		})
	}
	render() {
		const style = {
			fontSize: '1rem',
			padding: '15px'
		}
		return (
			<Layout name={`in ${this.state.id}`}>
				<div className="contentpage" style={style}>welcome to {this.state.id} page</div>
			</Layout>
		)
	}
}