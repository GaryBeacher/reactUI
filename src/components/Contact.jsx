import React, {Component} from 'react'
import Layout from './Layout'
import qrcode from '../assets/wechat.jpg'

export default class Contact extends Component {
	render() {
		return (
			<Layout name="Contact Me">
				<div className="contact">
					<div className="cont">
						<p>
							<img src={qrcode} alt="我的微信" />
						</p>
						<p className="email">E-mail: 528046@qq.com</p>
					</div>
				</div>
			</Layout>
		)
	}
}