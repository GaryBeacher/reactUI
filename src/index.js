import React from 'react'
import ReactDOM from 'react-dom'
import {Router, hashHistory} from 'react-router'
import SweetAnimate from './components/SweetAnimate'
import {remLayout} from './util'
import childRoutes from './routes'
import store from './store'
import './index.styl'


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			slideName: {
				enter: 'slideInRight',
				leave: 'slideOutLeft'
			},
			loading: false
		}
	}
	componentWillReceiveProps(nextProps) {
		let newPath = nextProps.location.pathname;
		let oldPath = this.props.location.pathname;
		if(newPath !== oldPath) {
			let slideName = ''
			if(oldPath === '/404') {
				slideName = {
					enter: 'slideInLeft',
					leave: 'slideOutRight'
				}
			} else if (newPath === '/404' || newPath.length >= oldPath.length) {
				slideName = {
					enter: 'slideInRight',
					leave: 'slideOutLeft'
				}
			} else {
				slideName = {
					enter: 'slideInLeft',
					leave: 'slideOutRight'
				}
			}
			store.loading.dispatch({type: 'HIDDEN', display: false})
			this.setState({slideName}, () => window.scrollTo(0, 0))
		}

	}
	shouldComponentUpdate(nextProps) {
		return nextProps.location.action === 'POP'
	}
	componentDidMount() {
		
		//rem自适应
		remLayout()

		store.loading.subscribe(() => {
			this.setState({
				loading: store.loading.getState()
			})
		})

	}	
	render() {
		const loading = this.state.loading ? <div className="isloading" onTouchMove={e => e.preventDefault()}>
			    	<div className="loading"></div>
			    	<p>正在加载</p>
			    </div> : null
		const {enter, leave} = this.state.slideName
		return (
			<div className="app">
				{loading}
			    <SweetAnimate
					component="span"
				    enter={enter}
				    leave={leave}
				    durationEnter={500}
				    durationLeave={500}
				>
				    {React.cloneElement(this.props.children, {
				        key: this.props.location.pathname
				    })}
				</SweetAnimate>
			</div>	
		)
	}
}



const routes = [
	{
		path: '/',
		component: App,
		indexRoute: {
			component: require('./Home.jsx')
		},
		childRoutes,
		onChange(prevState, nextState) {
			if(nextState.location.action === 'PUSH') {
				store.loading.dispatch({type: 'SHOW', display: true})
			}
		}
	},
	{
		path: '*',
		indexRoute: {
            onEnter(nextState, replace) {
                replace('/404')
            }
        }
	}
]

ReactDOM.render(
	<Router history={hashHistory} routes={routes} />,
	document.getElementById('app')
)
