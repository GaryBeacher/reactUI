import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class extends Component {
	render() {

		const {
			children,
			enter,
			leave,
			durationEnter,
			durationLeave,
			...others
		} = this.props
		
		const style = !this.props.transitionName ? <style dangerouslySetInnerHTML={{__html: this.renderStyle(enter, leave, durationEnter, durationLeave)}}></style> : null

		return (
			<div className="sweetanimate">
				{style}
				<ReactCSSTransitionGroup
	            	component="span"
	            	transitionName={{
	            		enter: 'enter',
	            		enterActive: enter,
	            		leave: 'leave',
	            		leaveActive: leave 
	            	}}
	            	transitionEnterTimeout={durationEnter}
	            	transitionLeaveTimeout={durationLeave}
	            	{...others}
	            >
		            {children}
				</ReactCSSTransitionGroup>
			</div>
		)
	}
	renderStyle(enter, leave, durationEnter, durationLeave) {
	    return (`
			.enter {
	        	opacity: 0;
	        }
	        .enter.${enter} {
	        	animation-duration: ${durationEnter / 1000}s;
	        	animation-fill-mode: both;
	        	opacity: 1;
	        }
	        .leave {
	        	opacity: 1;
	        }
	        .leave.${leave} {
	        	animation-duration: ${durationLeave / 1000}s;
	        	animation-fill-mode: both;
	        }`
		)
	}
}