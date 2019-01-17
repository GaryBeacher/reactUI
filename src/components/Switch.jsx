import React, {PropTypes, Component} from 'react'
import Layout from './Layout'
import {DialogBox} from './Dialog'

export class SwitchBox extends Component {
	static propTypes = {
		checked: PropTypes.bool,
		callback: PropTypes.func.isRequired
	}
	constructor(props) {
		super(props)
		this.state = {
			isChecked: props.checked || false
		}
	}
	render() {
		return (
			<div className="switch">
				<input type="checkbox" checked={this.state.isChecked} onChange={this.handleChange.bind(this)} />
			</div>
		)
	}
	handleChange(e) {
		this.setState({
			isChecked: e.target.checked
		})
		this.props.callback(e.target.checked)
	}
}

export default class Switch extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isChecked1: false,
			isChecked2: false,
			dialog: {
				show: false
			}
		}
	}
	render() {
		return (
			<Layout name="Switch">
				<div>
					<div className="switchdemo">
						<div className="left">选中状态：{String(this.state.isChecked1)}</div>
						<SwitchBox checked={this.state.isChecked1} callback={this.getSwitchValue1.bind(this)} />
					</div>
					<div className="switchdemo">
						<div className="left">弹框</div>
						<SwitchBox callback={this.getSwitchValue2.bind(this)} />
						<DialogBox {...this.state.dialog} hidden={this.hidden.bind(this)} />
					</div>
					<div className="switchdemo">
						<div className="left">呈示图片</div>
						<SwitchBox checked={this.state.isChecked2} callback={this.getSwitchValue3.bind(this)} />
					</div>
					{this.state.isChecked2 ? (
						<div className="demoarea">
							<img src='http://img1.v.tmcdn.net/haizei/bizhi/big_pic/20120721-116644/7677948fd4a9b1bb78c6973ddfce9ec220.jpg' alt="" />
						</div>
					) : null}
				</div>
			</Layout>
		)
	}
	hidden() {
		this.setState({
			dialog: {
				show: false
			}
		})
	}
	getSwitchValue1(value) {
		this.setState({
			isChecked1: value,
			dialog: {
				show: false
			}
		})
	}
	getSwitchValue2(value) {
		if(value) {
			this.setState({
				dialog: {
					show: true,
					content: '选中了！'
				}
			})
		}
	}
	getSwitchValue3(value) {
		this.setState({
			isChecked2: value,
			dialog: {
				show: false
			}
		})
	}
}