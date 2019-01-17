export default [
	{
		path: '404',
		getComponent: (location, callback) => {
			require.ensure([], require => {
				callback(null, require('./components/404.jsx').default)
			})
		}
	},
	{
		path: 'demos',
		getComponent: (location, callback) => {
			require.ensure([], require => {
				callback(null, require('./Demos.jsx').default)
			})
		}
	},
	{
		path: 'about',
		getComponent: (location, callback) => {
			require.ensure([], require => {
				callback(null, require('./components/About.jsx').default)
			})
		}
	},
	{
		path: 'contact',
		getComponent: (location, callback) => {
			require.ensure([], require => {
				callback(null, require('./components/Contact.jsx').default)
			})
		}
	},
	{
		path: '/demo/tab',
		getComponent: (location, callback) => {
			require.ensure([], require => {
				callback(null, require('./components/Tab.jsx').default)
			})
		}
	},
	{
		path: '/demo/slide',
		getComponent: (location, callback) => {
			require.ensure([], require => {
				callback(null, require('./components/Slide.jsx').default)
			})
		}
	},
	{
		path: '/demo/totop',
		getComponent: (location, callback) => {
			require.ensure([], require => {
				callback(null, require('./components/ToTop.jsx').default)
			})
		}
	},
	{
		path: '/demo/actionsheet',
		getComponent: (location, callback) => {
			require.ensure([], require => {
				callback(null, require('./components/ActionSheet.jsx').default)
			})
		}
	},
	{
		path: '/demo/animate',
		getComponent: (location, callback) => {
			require.ensure([], require => {
				callback(null, require('./components/Animate.jsx').default)
			})
		}
	},
	{
		path: '/demo/dialog',
		getComponent: (location, callback) => {
			require.ensure([], require => {
				callback(null, require('./components/Dialog.jsx').default)
			})
		}
	},
	{
		path: '/demo/toast',
		getComponent: (location, callback) => {
			require.ensure([], require => {
				callback(null, require('./components/Toast.jsx').default)
			})
		}
	},
	{
		path: '/demo/fullpage',
		getComponent: (location, callback) => {
			require.ensure([], require => {
				callback(null, require('./components/FullPage.jsx').default)
			})
		}
	},
	{
		path: '/demo/fullpagex',
		getComponent: (location, callback) => {
			require.ensure([], require => {
				callback(null, require('./components/FullPageX.jsx').default)
			})
		}
	},
	{
		path: '/demo/gesture',
		getComponent: (location, callback) => {
			require.ensure([], require => {
				callback(null, require('./components/Gesture.jsx').default)
			})
		}
	},
	{
		path: '/demo/countdown',
		getComponent: (location, callback) => {
			require.ensure([], require => {
				callback(null, require('./components/CountDown.jsx').default)
			})
		}
	},
	{
		path: '/demo/switch',
		getComponent: (location, callback) => {
			require.ensure([], require => {
				callback(null, require('./components/Switch.jsx').default)
			})
		}
	},
	{
		path: '/demo/refresh',
		getComponent: (location, callback) => {
			require.ensure([], require => {
				callback(null, require('./components/Refresh.jsx').default)
			})
		}
	},
	{
		path: '/demo/infiniteload',
		getComponent: (location, callback) => {
			require.ensure([], require => {
				callback(null, require('./components/InfiniteLoad.jsx').default)
			})
		}
	},
	{
		path: '/demo/progress',
		getComponent: (location, callback) => {
			require.ensure([], require => {
				callback(null, require('./components/Progress.jsx').default)
			})
		}
	},
	{
		path: '/demo/citypicker',
		getComponent: (location, callback) => {
			require.ensure([], require => {
				callback(null, require('./components/CityPicker.jsx').default)
			})
		}
	},
	{
		path: '/demo/datepicker',
		getComponent: (location, callback) => {
			require.ensure([], require => {
				callback(null, require('./components/DatePicker.jsx').default)
			})
		}
	},
	{
		path: '/demo/login',
		getComponent: (location, callback) => {
			require.ensure([], require => {
				callback(null, require('./components/Login.jsx').default)
			})
		}
	},
	{
		path: '/demo/regist',
		getComponent: (location, callback) => {
			require.ensure([], require => {
				callback(null, require('./components/Regist.jsx').default)
			})
		}
	},
	{
		path: '/demo/slider',
		getComponent: (location, callback) => {
			require.ensure([], require => {
				callback(null, require('./components/Slider.jsx').default)
			})
		}
	},
	{
		path: '/demo/list',
		getComponent: (location, callback) => {
			require.ensure([], require => {
				callback(null, require('./components/List.jsx').default)
			})
		}
	},
	{
		path: '/demo/upload',
		getComponent: (location, callback) => {
			require.ensure([], require => {
				callback(null, require('./components/Upload.jsx').default)
			})
		}
	},
	{
		path: '/demo/select',
		getComponent: (location, callback) => {
			require.ensure([], require => {
				callback(null, require('./components/Select.jsx').default)
			})
		}
	},
	{
		path: '/demo/indicator',
		getComponent: (location, callback) => {
			require.ensure([], require => {
				callback(null, require('./components/Indicator.jsx').default)
			})
		}
	},
	{
		path: '/demo/list/:id',
		getComponent: (location, callback) => {
			require.ensure([], require => {
				callback(null, require('./components/Content.jsx').default)
			})
		}
	},
	{
		path: '/demo/fullslide',
		getComponent: (location, callback) => {
			require.ensure([], require => {
				callback(null, require('./components/ImageShow.jsx').default)
			})
		}
	},
	{
		path: '/demo/textmarquee',
		getComponent: (location, callback) => {
			require.ensure([], require => {
				callback(null, require('./components/TextMarquee.jsx').default)
			})
		}
	}
]