import React, {Component} from 'react'
import Layout from './Layout'
import Des from './Des'
import {DialogBox} from './Dialog'

export default class Select extends Component {
	constructor(props) {
		super(props)
		this.state = {
			tea: '',
			skin: [],
			dialog: {
				show: false
			}
		}
	}
	componentWillMount() {
		this.tea = {
			title: '请选择一种茶叶',
			item: ['武夷山大红袍', '黄山毛峰', '信阳毛尖', '峨眉山竹叶青'],
			callback: this.getTea.bind(this)
		}
		this.skin = {
			title: '请选择护肤品牌(多选)',
			item: ['Clé de Peau Beauté', 'COSME DECORTE', 'ALBION', 'LANCOME', 'Estee Lauder'],
			callback: this.getSkin.bind(this)
		}
	}
	componentDidMount() {
		this.setState({
			tea: this.tea.item[0]
		})
	}
	render() {
		return (
			<Layout name="Select">
				<Des info="单选" />
				<SingleSelect {...this.tea} />
				<Des info="多选" />
				<MultipleSelect {...this.skin} />
				<div className="btnouter">
					<div className="abtn" onClick={this.submit.bind(this)}>提 交</div>
				</div>
				<DialogBox {...this.state.dialog} hidden={this.hidden.bind(this)} />
			</Layout>
		)
	}
	getTea(value) {
		this.setState({
			tea: value
		})
	}
	getSkin(item) {
		this.setState({
			skin: item
		})
	}
	hidden() {
		this.setState({
			dialog: {
				show: false
			}
		})
	}
	submit() {
		const data = {
			tea: this.state.tea,
			skin: this.state.skin
		}
		this.setState({
			dialog: {
				show: true,
				title: '提交的数据',
				content: JSON.stringify(data),
				confirmText: '好的~'
			}
		})
	}
}

export class SingleSelect extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selected: 0
		}
	}
	render() {
		const item = this.props.item.map((value, key) => {
			return (
				<li 
					key={key} 
					className={this.state.selected === key ? 'selected' : null}
					onClick={this.selectHandler.bind(this, key)}
				>
					<i className="iconfont icon-radiobutton2"></i>
					<span>{value}</span>
				</li>
			)
		})
		return (
			<div className="select">
				<h2>{this.props.title}</h2>
				<ul>
					{item}
				</ul>
			</div>
		)
	}
	selectHandler(key) {
		this.setState({
			selected: key
		}, () => this.props.callback(this.props.item[key]))
	}
}

export class MultipleSelect extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selectArr: []
		}
	}
	render() {
		const item = this.props.item.map((value, key) => {
			return (
				<li 
					key={key} 
					className={this.state.selectArr.some(value => key === value) ? 'selected' : null}
					onClick={this.selectHandler.bind(this, key)}
				>
					<i className="iconfont icon-radiobutton2"></i>
					<span>{value}</span>
				</li>
			)
		})
		return (
			<div className="select">
				<h2>{this.props.title}</h2>
				<ul>
					{item}
				</ul>
			</div>
		)
	}
	selectHandler(key) {
		const arr = this.state.selectArr
		this.setState({
			selectArr: arr.some(v => v === key) ?
						arr.filter(v => v !== key) : 
						arr.concat(key)
		}, () => {
			const arr = []
			this.props.item.forEach((v, k) => {
				if(this.state.selectArr.some(v => v === k)) {
					arr.push(v)
				}
			})
			this.props.callback(arr)
		})
	}
}