import React, {Component} from 'react'
import Layout from './Layout'
import Des from './Des'
import Code from './Code'

class ActionSheetBox extends Component {
	constructor(props) {
		super(props)
		this.state = {
			show: props.open,
			trans: false
		}
	}
	componentWillReceiveProps(nextProps) {
		if(nextProps.open) {
			this.setState({
	        	show: true
	        }, () => {
	        	setTimeout(() => {
					this.setState({
			        	trans: true
			        })
	        	}, 100)
	        })
		}
    }

	render() {
		let styleDiv = `inner ${this.state.show ? 'show' : ''} ${this.state.trans ? 'trans' : ''}`
		let styleMask = `mask ${this.state.show ? 'show' : ''}`
		const item = this.props.item.map((v, k) => {
			return <li key={k} onClick={() => {
				this.closeHandler(v.callback)
			}}>{v.text}</li>
		})
		return (
			<div className="actionsheet" onTouchMove={e => e.preventDefault()}>
				<div className={styleDiv}>
					<ul>
						{item}
						<li onClick={this.closeHandler.bind(this)}>取消</li>
					</ul>
				</div>
				<div className={styleMask} onClick={this.closeHandler.bind(this)}></div>
			</div>
		)
	}
	closeHandler(fn) {
        this.setState({
        	trans: false
        }, () => {
        	setTimeout(() => {
				this.setState({
		        	show: false
		        })
        	}, 200)
        })
        this.props.hidden()
        if(typeof fn === 'function') {
        	fn()
        }
	}
}

export default class ActionSheet extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isOpen: false,
			actiontext: '初始化'
		}
	}
	render() {
const codes = `const self = this
const item = [{
	text: '添加',
	callback: self.addHandler.bind(self)
},
{
	text: '删除',
	callback: self.deleteHandler.bind(self)
},
{
	text: '修改',
	callback: self.editHandler.bind(self)
}]`
		const self = this
		const item = [{
				text: '添加',
				callback: self.addHandler.bind(self)
			},
			{
				text: '删除',
				callback: self.deleteHandler.bind(self)
			},
			{
				text: '修改',
				callback: self.editHandler.bind(self)
			}]
		return (
			<Layout name="ActionSheet">
				<Des info="<ActionSheetBox item={item} open={this.state.isOpen} />" />
				<div className="actionsheetdes">
					<span className="btn" onClick={this.clickHandler.bind(this)}>点我调用</span>
					<span className="actiontext">回调操作：{this.state.actiontext}</span>
					<Code codes={codes} />
				</div>
				<ActionSheetBox item={item} open={this.state.isOpen} hidden={this.hidden.bind(this)} />
			</Layout>
		)
	}
	clickHandler() {
		this.setState({
			isOpen: true
		})
	}
	addHandler() {
		this.setState({
			actiontext: '添加成功'
		})
	}
	deleteHandler() {
		this.setState({
			actiontext: '删除成功'
		})
	}
	editHandler() {
		this.setState({
			actiontext: '修改成功'
		})
	}
	hidden() {
		this.setState({
			isOpen: false
		})
	}
}