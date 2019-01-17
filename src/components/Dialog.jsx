import React, {PropTypes, Component} from 'react'
import Layout from './Layout'
import Des from './Des'
import Code from './Code'
import SweetAnimate from './SweetAnimate'

export default class Dialog extends Component {
	static contextTypes = {
	    router: PropTypes.object,
	}
	constructor(props) {
		super(props)
		this.state = {
			dialog: {
				show: false
			}
		}
	}
	render() {
const codes1 = `this.setState({
	dialog: {
		title: '标题',
		content: '内容',
		confirmText: '好的，没问题' //可选
	}
})`
const codes2 = `this.setState({
	dialog: {
	    	title: '我是名字',
	    	content: '要回到主页吗？',
	    	confirmText: 'yes', //可选
	    	cancleText: 'no', //可选
	    	callback() {router.push('/')}
	}
})`
		return (
			<Layout name="对话框">
				<Des info="对话框组件加上了弹出动画组件" />
				<Des info="<DialogBox {...this.state.dialog} />" />
				<div className="dialogdemo">
					<div className="btn" onClick={this.showDialog1.bind(this)}>普通对话框</div>
					<Code codes={codes1} />
					<div className="line"></div>
					<div className="btn" onClick={this.showDialog2.bind(this)}>回调对话框</div>
					<Code codes={codes2} />
					<DialogBox {...this.state.dialog} hidden={this.hidden.bind(this)} />
				</div>
			</Layout>
		)
	}
	showDialog1() {
	    this.setState({
	    	dialog: {
	    		show: true,
		    	title: '标题',
		    	content: '内容',
		    	confirmText: '好的，没问题'
		    }
	    })
	}
	showDialog2() {
		const router = this.context.router
	    this.setState({
	    	dialog: {
	    		show: true,
		    	title: '我是名字',
		    	content: '要回到主页吗？',
		    	confirmText: 'yes',
		    	cancleText: 'no',
		    	callback() {
		    		router.push('/')
		    	}
		    }
	    })
	}
	hidden() {
		this.setState({
			dialog: {
				show: false
			}
		})
	}
}

export class DialogBox extends Component {
	static propTypes = {
		title: PropTypes.string,
		content: PropTypes.string,
		callback: PropTypes.func
	}
	constructor(props) {
		super(props)
		this.state = {
			show: props.show || false
		}
	}
	componentWillReceiveProps(nextProps) {
		if(nextProps.show) {
			this.setState({
				show: true
			})
		}
    }
	render() {
		const {title, content, confirmText, cancleText, callback} = this.props
		const div = this.state.show ? (
				<div className="dialog" onTouchMove={e => e.preventDefault()}>
					<div className="innerbox">
						<div className="title">{title}</div>
						<div className="content">{content}</div>
						{!callback ? (
							<div className="buttons">
								<span className="confirm" onClick={this.closeDialog.bind(this)}>
									{confirmText || '确认'}
								</span>
							</div>
						) : (
							<div className="buttons">
								<span className="cancle" onClick={this.closeDialog.bind(this)}>
									{cancleText || '取消'}
								</span>
								<span className="confirm" onClick={() => {
									this.closeDialog(callback)
								}}>
									{confirmText || '确认'}
								</span>
							</div>
						)}
					</div>
				</div>
			) : ''
		const mask = this.state.show ? <div className="overmask" onClick={this.closeDialog.bind(this)}></div> : ''
		return (
			<div>
				<SweetAnimate
					component="span"
				    enter="bounceIn"
				    leave="zoomOut"
				    durationEnter={500}
				    durationLeave={500}>
				    {div}
				</SweetAnimate>
				<SweetAnimate
					transitionName="overmask"
		        	transitionEnterTimeout={500}
		        	transitionLeaveTimeout={500}>
		        	{mask}
				</SweetAnimate>
			</div>
		)
	}
	closeDialog(fn) {
		this.setState({
			show: false
		})
		this.props.hidden()
		if(typeof fn === 'function') {
        	setTimeout(fn, 500)
        }
	}
}