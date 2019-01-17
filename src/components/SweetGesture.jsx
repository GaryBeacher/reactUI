import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Hammer from 'hammerjs'

const privateProps = {
	children: true,
	direction: true,
	options: true,
	recognizeWith: true,
	vertical: true,
}
const handlerToEvent = {
	action: 'tap press',
	onDoubleTap: 'doubletap',
	onPan: 'pan',
	onPanCancel: 'pancancel',
	onPanEnd: 'panend',
	onPanStart: 'panstart',
	onPinch: 'pinch',
	onPinchCancel: 'pinchcancel',
	onPinchEnd: 'pinchend',
	onPinchIn: 'pinchin',
	onPinchOut: 'pinchout',
	onPinchStart: 'pinchstart',
	onPress: 'press',
	onPressUp: 'pressup',
	onRotate: 'rotate',
	onRotateCancel: 'rotatecancel',
	onRotateEnd: 'rotateend',
	onRotateMove: 'rotatemove',
	onRotateStart: 'rotatestart',
	onSwipe: 'swipe',
	onTap: 'tap',
	onSwipeLeft: 'swipeleft',
	onSwipeRight: 'swiperight',
	onSwipeUp: 'swipeup',
	onSwipeDown: 'swipedown',
	onPanLeft: 'panleft',
	onPanRight: 'panright',
	onPanUp: 'panup',
	onPanDown: 'pandown'
}
Object.keys(handlerToEvent).forEach(function(i) {
	privateProps[i] = true
})

function updateElem(elem, props) {
	if (props.hasOwnProperty('vertical')) {
		console.warn('vertical已经弃用, 请使用direction代替')
	}

	let directionProp = props.direction
	if (directionProp || props.hasOwnProperty('vertical')) {
		let direction = directionProp ? directionProp : (props.vertical ? 'DIRECTION_ALL' : 'DIRECTION_HORIZONTAL')
		elem.get('pan').set({ direction: Hammer[direction] })
		elem.get('swipe').set({ direction: Hammer[direction] })
	}

	if (props.options) {
		Object.keys(props.options).forEach(function(option) {
			if (option === 'recognizers') {
				Object.keys(props.options.recognizers).forEach(function(gesture) {
					var recognizer = elem.get(gesture)
					recognizer.set(props.options.recognizers[gesture])
				}, this)
			} else {
				let key = option
				let optionObj = {}
				optionObj[key] = props.options[option]
				elem.set(optionObj)
			}
		}, this)
	}

	if (props.recognizeWith) {
		Object.keys(props.recognizeWith).forEach(function (gesture) {
			let recognizer = elem.get(gesture)
			recognizer.recognizeWith(props.recognizeWith[gesture])
		}, this)
	}

	Object.keys(props).forEach(function (p) {
		let e = handlerToEvent[p]
		if(e) {
			elem.off(e)
			elem.on(e, props[p])
		}
	})
}

export default class extends Component {
	componentDidMount() {
		this.elem = new Hammer(ReactDOM.findDOMNode(this))
		updateElem(this.elem, this.props)
	}
	componentDidUpdate() {
		if(this.elem) {
			updateElem(this.elem, this.props)
		}
	}
	componentWillUnmount() {
		if(this.elem) {
			this.elem.stop()
			this.elem.destroy()
		}
		this.elem = null
	}
	render() {
		const props = {}
		Object.keys(this.props).forEach(function(i) {
			if(!privateProps[i]) {
				props[i] = this.props[i]
			}
		}, this)
		return React.cloneElement(React.Children.only(this.props.children), props)
	}
}