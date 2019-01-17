import React, {Component} from 'react'
import Layout from './Layout'
import Des from './Des'



export class TabBox extends Component {
	constructor(props) {
		super(props)
		this.state = {
			cur: this.props.start || 0,
			vertical:this.props.vertical || false,
		}
	}
	render() {
		const {vertical}=this.state;
		const len = this.props.title.length
		const TabMenu = this.props.title.map((v, k) => {
			return (
				<li 
					key={k} 
					className={k === this.state.cur ? 'on' : ''}
					onClick={this.clickHandler.bind(this, k)}
				>{v}</li>
			)
		})
		const TabCont = this.props.cont.map((v, k) => {
			return (
				<dd key={k}>{v}</dd>
			)
		})
		const blockStyle = {
			width: `${100 / len}%`,
			transform: `translateX(${this.state.cur * 100}%)`
		}
		const contStyle = {
			width: `${len * 100}%`,
			transform: `translateX(-${this.state.cur * 100 / len}%)`
		}
		const blockStyleVertical = {
			height: `${100 / len}%`,
			transform: `translateY(${this.state.cur * 100}%)`
		}
		const contStyleVertical = {
			height: `${len * 100}%`,
			transform: `translateY(-${this.state.cur * 100 / len}%)`
		}
		
		return (
			<div className="tab">
				<div className={vertical?"tabwd":"tabhd"}>
					<ul>
						{TabMenu}
					</ul>
					<div className="block" style={vertical?blockStyleVertical:blockStyle}></div>
				</div>
				<div className={vertical?"tabcontV":"tabcont"}>
					<dl style={vertical?contStyleVertical:contStyle}>
						{TabCont}
					</dl>
				</div>
			</div>
		)
	}
	clickHandler(k) {
		this.setState({
			cur: k
		})
	}
}

export default class Tab extends Component {
	render() {
		const tab1 = {
			title: ['tab1', 'tab2', 'tab3'],
			cont: ['cont1', 'cont2', 'cont3']
		}
		const tab2 = {
			title: ['标签页1', '标签页2', '标签页3'],
			cont: [<img src='https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=822258577,3372713154&fm=26&gp=0.jpg' alt=""/>, 
			<img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543987000915&di=6d4023b0ad432e60ceea3c028c4b155c&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F17%2F80%2F90%2F5594c1b22d274_1024.jpg' alt=""/>, 
			<img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543987000914&di=2e8e0d5c81ece9c2a9c3595b49d8090d&imgtype=0&src=http%3A%2F%2Fpic-cdn.35pic.com%2F58pic%2F17%2F86%2F92%2F55a0b0fc4ac3c_1024.jpg' alt=""/>]
		}
		const tab3 = {
			title: ['tab1', 'tab2', 'tab3', 'tab4', 'tab5'],
			cont: ['cont1', 'cont2', 'cont3', 'cont4', 'cont5']
		}
		return (
			<Layout name="选项卡">
				<Des info="默认效果：<TabBox {...tab1}/>" />
				<TabBox {...tab1} />
				<Des info="指定位置：<TabBox {...tab2} start={2} />" />
				<TabBox {...tab2} start={1} />
				<Des info="垂直方向：<TabBox {...tab3} vertical={true}/>" />
				<TabBox {...tab3} vertical={true}/>
			</Layout>
		)
	}
}