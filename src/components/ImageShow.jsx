import React, {Component} from 'react'
import Layout from './Layout'
import FullSlide from './FullSlide'

export default class extends Component {
	render() {
		const url = 'http://www.sweetui.com/demo/api/imgs/'
		const data = [{
			name: 'list1',
			img: [`${url}cz1.jpg`, `${url}cz2.jpg`, `${url}cz3.jpg`]
		}, {
			name: 'list2',
			img: [`${url}s1.png`, `${url}s2.png`, `${url}s3.png`, `${url}s4.png`, `${url}s5.png`]
		}]
		const imgBlock = data.map((v, k) => {
			return (
				<div className="inner" key={k}>
					<h2>->演示图片集合{k+1}</h2>
					<ImgBlock imgs={v.img} />
				</div>
			)
		})
		return (
			<Layout name="FullSlide">
				<div className="imageshowpage">
					{imgBlock}
				</div>
			</Layout>
		)
	}
}

class ImgBlock extends Component {
	constructor(props) {
		super(props)
		this.state = {
			show: false,
			cur: 0
		}
	}
	render() {
		const lis = this.props.imgs.map((v, k) => {
			return <li key={k} onClick={this.openFullSlide.bind(this, k)}>
				<img src={v} alt=""/>
			</li>
		})
		const props = {
			show: this.state.show,
			cur: this.state.cur,
			imgs: this.props.imgs,
			reset: this.callback.bind(this)
		}
		return (
			<div>
				<ul className="piclist">
					{lis}
				</ul>
				<FullSlide {...props} />
			</div>
		)
	}
	openFullSlide(cur) {
		this.setState({
			show: true,
			cur: cur
		})
	}
	callback() {
		this.setState({
			show: false,
			cur: 0
		})
	}
}