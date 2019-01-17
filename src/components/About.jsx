import React, {Component, PropTypes} from 'react'
import Layout from './Layout'
import qrcode from '../assets/wechat.jpg'
export default class About extends Component {
	static contextTypes = {
	    router: PropTypes.object,
	}
	render() {
		return (
			<Layout name="关于我">
				<div className="about">
					<div className="cont">
						<p>这套代码组件是从我做过的各个React项目中总结出来的一些组件，采用jsx的语法格式写成的ReactJs组件集合库。</p>
						<p>近期因为公司团队在写一套可以兼容移动端，RN等的React组件库，所以我也突发奇想动手写一套符合自己习惯的组件库。</p>
						<p>在编写代码过程中我有参考了Ant Design和Amaze UI的设计和基础逻辑。</p>
						<p>我大概有写了一些常用组件，比如
						<a onClick={
							() => {
								this.context.router.push('/demo/tab')
							}
						}>选项卡</a>、<a onClick={
							() => {
								this.context.router.push('/demo/slide')
							}
						}>轮播图</a>等。也添加了一些通用的功能组件。如<a onClick={
							() => {
								this.context.router.push('/demo/animate')
							}
						}>动画组件</a>、<a onClick={
							() => {
								this.context.router.push('/demo/gesture')
							}
						}>手势操作组件</a>等。</p>
						<p>后续我还会添加新组件，可加我微信交流，谢谢</p>
						<p>
							<img src={qrcode} alt="我的微信" />
						</p>
						<p className="email">E-mail: zhaobingqi02@58ganji.com</p>
					</div>
				</div>
			</Layout>
		)
	}
}