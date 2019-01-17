import React, { Component } from 'react'
import Layout from './components/Layout'
import {Link} from 'react-router'

class Home extends Component {

	render() {
		return (
			<Layout name="React组件库" back={false}>
				<div className="home">
					<h2>欢迎使用</h2>
					<ul>
						<li>
							<Link to="/demos">
								<div>
									<p>组件</p>
									<i className="iconfont icon-listview"></i>
								</div>
							</Link>
						</li>
						<li>
							<Link to="/about">
								<div>
									<p>关于我</p>
									<i className="iconfont rotateicon icon-zhinengyouhua"></i>
								</div>
							</Link>
						</li>
					</ul>
				</div>
				<footer>
					<p>©{new Date().getFullYear()} GaryChiu</p>
				</footer>
			</Layout>
		)
	}
}
module.exports = Home