import React, {Component} from 'react'
import Layout from './Layout'
import Des from './Des'

export default class Indicator extends Component {
	render() {
		return (
			<Layout name="Indicator">
				<Des info='简单调用<Ripple color="red" size="2" />' />
				<div className="indicatordemo">
					<ul>
						<li>
							<h3>Ripple</h3>
							<Ripple color="red" />
						</li>
						<li>
							<h3>Spiral</h3>
							<Spiral color="orange" />
						</li>
						<li>
							<h3>IosSmall</h3>
							<IosSmall color="#ff348b" />
						</li>
						<li>
							<h3>IosBig</h3>
							<IosBig color="green" />
						</li>
						<li>
							<h3>Lines</h3>
							<Lines color="#00a2a1" />
						</li>
						<li>
							<h3>Dots</h3>
							<Dots color="blue" />
						</li>
						<li>
							<h3>Crescent</h3>
							<Crescent color="purple" />
						</li>
						<li>
							<h3>Circles</h3>
							<Circles />
						</li>
						<li>
							<h3>Bubbles</h3>
							<Bubbles color="#8da500" />
						</li>
						<li>
							<h3>Balls</h3>
							<Balls color="pink" />
						</li>
						<li>
							<h3>Gps</h3>
							<Gps color="#f60" />
						</li>
						<li>
							<h3>Battery</h3>
							<Battery color="#999" />
						</li>
						<li>
							<h3>Pacman</h3>
							<Pacman color="#bf7e47" />
						</li>
						<li>
							<h3>Cube</h3>
							<Cube color="#059817" />
						</li>
						<li>
							<h3>Gear</h3>
							<Gear color="#40596f" />
						</li>
						<li>
							<h3>Msgs</h3>
							<Msgs color="#ff4d30" />
						</li>
					</ul>
					
				</div>
			</Layout>
		)
	}
}

export function Ripple(props) {
	return (
		<span className="indicator" style={{
			stroke: props.color, 
			fill: props.color,
			width: props.size ? `${+props.size}rem` : '1rem',
			height: props.size ? `${+props.size}rem` : '1rem',
		}}>
			<svg viewBox="0 0 64 64">
				<g fill="none" fillRule="evenodd" strokeWidth="3">
					<circle cx="32" cy="32" r="23.886">
						<animate attributeName="r" begin="0s" dur="2s" values="0;24" keyTimes="0;1" keySplines="0.1,0.2,0.3,1" calcMode="spline" repeatCount="indefinite"></animate>
						<animate attributeName="stroke-opacity" begin="0s" dur="2s" values=".2;1;.2;0" repeatCount="indefinite"></animate>
					</circle>
					<circle cx="32" cy="32" r="17.8228">
						<animate attributeName="r" begin="-1s" dur="2s" values="0;24" keyTimes="0;1" keySplines="0.1,0.2,0.3,1" calcMode="spline" repeatCount="indefinite"></animate>
						<animate attributeName="stroke-opacity" begin="-1s" dur="2s" values=".2;1;.2;0" repeatCount="indefinite"></animate>
					</circle>
				</g>
			</svg>
		</span>
	)
}

export function Spiral(props) {
	return (
		<span className="indicator" style={{
			stroke: props.color, 
			fill: props.color,
			width: props.size ? `${+props.size}rem` : '1rem',
			height: props.size ? `${+props.size}rem` : '1rem',
		}}>
			<svg viewBox="0 0 64 64">
				<g>
					<defs>
						<linearGradient id="sGD" gradientUnits="userSpaceOnUse" x1="55" y1="46" x2="2" y2="46">
							<stop offset="0.1" style={{
								stopOpacity: 0,
								stopColor: props.color
							}}></stop>
							<stop offset="1" style={{
								stopColor: props.color
							}}></stop>
						</linearGradient>
					</defs>
					<g strokeWidth="4" strokeLinecap="round" fill="none" transform="rotate(31.9988 32 32)">
						<path stroke="url(#sGD)" d="M4,32 c0,15,12,28,28,28c8,0,16-4,21-9"></path>
						<path d="M60,32 C60,16,47.464,4,32,4S4,16,4,32"></path>
						<animateTransform values="0,32,32;360,32,32" attributeName="transform" type="rotate" repeatCount="indefinite" dur="750ms"></animateTransform>
					</g>
				</g>
			</svg>
		</span>
	)
}

export function IosSmall(props) {
	return (
		<span className="indicator" style={{
			stroke: props.color, 
			fill: props.color,
			width: props.size ? `${+props.size}rem` : '1rem',
			height: props.size ? `${+props.size}rem` : '1rem',
		}}>
			<svg viewBox="0 0 64 64">
				<g strokeWidth="4" strokeLinecap="round">
					<line y1="12" y2="20" transform="translate(32,32) rotate(180)">
						<animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate>
					</line>
					<line y1="12" y2="20" transform="translate(32,32) rotate(210)">
						<animate attributeName="stroke-opacity" dur="750ms" values="0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0" repeatCount="indefinite"></animate>
					</line>
					<line y1="12" y2="20" transform="translate(32,32) rotate(240)">
						<animate attributeName="stroke-opacity" dur="750ms" values=".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1" repeatCount="indefinite"></animate>
					</line>
					<line y1="12" y2="20" transform="translate(32,32) rotate(270)">
						<animate attributeName="stroke-opacity" dur="750ms" values=".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15" repeatCount="indefinite"></animate>
					</line>
					<line y1="12" y2="20" transform="translate(32,32) rotate(300)">
						<animate attributeName="stroke-opacity" dur="750ms" values=".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25" repeatCount="indefinite"></animate>
					</line>
					<line y1="12" y2="20" transform="translate(32,32) rotate(330)">
						<animate attributeName="stroke-opacity" dur="750ms" values=".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35" repeatCount="indefinite"></animate>
					</line>
					<line y1="12" y2="20" transform="translate(32,32) rotate(0)">
						<animate attributeName="stroke-opacity" dur="750ms" values=".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45" repeatCount="indefinite"></animate>
					</line>
					<line y1="12" y2="20" transform="translate(32,32) rotate(30)">
						<animate attributeName="stroke-opacity" dur="750ms" values=".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55" repeatCount="indefinite"></animate>
					</line>
					<line y1="12" y2="20" transform="translate(32,32) rotate(60)">
						<animate attributeName="stroke-opacity" dur="750ms" values=".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65" repeatCount="indefinite"></animate>
					</line>
					<line y1="12" y2="20" transform="translate(32,32) rotate(90)">
						<animate attributeName="stroke-opacity" dur="750ms" values=".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7" repeatCount="indefinite"></animate>
					</line>
					<line y1="12" y2="20" transform="translate(32,32) rotate(120)">
						<animate attributeName="stroke-opacity" dur="750ms" values=".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85" repeatCount="indefinite"></animate>
					</line>
					<line y1="12" y2="20" transform="translate(32,32) rotate(150)">
						<animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate>
					</line>
				</g>
			</svg>
		</span>
	)
}

export function IosBig(props) {
	return (
		<span className="indicator" style={{
			stroke: props.color, 
			fill: props.color,
			width: props.size ? `${+props.size}rem` : '1rem',
			height: props.size ? `${+props.size}rem` : '1rem',
		}}>
			<svg viewBox="0 0 64 64">
				<g strokeWidth="4" strokeLinecap="round">
					<line y1="17" y2="29" transform="translate(32,32) rotate(180)">
						<animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate>
					</line>
					<line y1="17" y2="29" transform="translate(32,32) rotate(210)">
						<animate attributeName="stroke-opacity" dur="750ms" values="0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0" repeatCount="indefinite"></animate>
					</line>
					<line y1="17" y2="29" transform="translate(32,32) rotate(240)">
						<animate attributeName="stroke-opacity" dur="750ms" values=".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1" repeatCount="indefinite"></animate>
					</line>
					<line y1="17" y2="29" transform="translate(32,32) rotate(270)">
						<animate attributeName="stroke-opacity" dur="750ms" values=".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15" repeatCount="indefinite"></animate>
					</line>
					<line y1="17" y2="29" transform="translate(32,32) rotate(300)">
						<animate attributeName="stroke-opacity" dur="750ms" values=".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25" repeatCount="indefinite"></animate>
					</line>
					<line y1="17" y2="29" transform="translate(32,32) rotate(330)">
						<animate attributeName="stroke-opacity" dur="750ms" values=".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35" repeatCount="indefinite"></animate>
					</line>
					<line y1="17" y2="29" transform="translate(32,32) rotate(0)">
						<animate attributeName="stroke-opacity" dur="750ms" values=".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45" repeatCount="indefinite"></animate>
					</line>
					<line y1="17" y2="29" transform="translate(32,32) rotate(30)">
						<animate attributeName="stroke-opacity" dur="750ms" values=".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55" repeatCount="indefinite"></animate>
					</line>
					<line y1="17" y2="29" transform="translate(32,32) rotate(60)">
						<animate attributeName="stroke-opacity" dur="750ms" values=".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65" repeatCount="indefinite"></animate>
					</line>
					<line y1="17" y2="29" transform="translate(32,32) rotate(90)">
						<animate attributeName="stroke-opacity" dur="750ms" values=".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7" repeatCount="indefinite"></animate>
					</line>
					<line y1="17" y2="29" transform="translate(32,32) rotate(120)">
						<animate attributeName="stroke-opacity" dur="750ms" values=".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85" repeatCount="indefinite"></animate>
					</line>
					<line y1="17" y2="29" transform="translate(32,32) rotate(150)">
						<animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate>
					</line>
				</g>
			</svg>
		</span>
	)
}

export function Lines(props) {
	return (
		<span className="indicator" style={{
			stroke: props.color, 
			fill: props.color,
			width: props.size ? `${+props.size}rem` : '1rem',
			height: props.size ? `${+props.size}rem` : '1rem',
		}}>
			<svg viewBox="0 0 64 64">
				<g strokeWidth="7" strokeLinecap="round">
					<line x1="10" x2="10" y1="17.7779" y2="44.4442">
						<animate attributeName="y1" dur="750ms" values="16;18;28;18;16;16" repeatCount="indefinite"></animate>
						<animate attributeName="y2" dur="750ms" values="48;46;36;44;48;48" repeatCount="indefinite"></animate>
						<animate attributeName="stroke-opacity" dur="750ms" values="1;.4;.5;.8;1;1" repeatCount="indefinite"></animate>
					</line>
					<line x1="24" x2="24" y1="26.8895" y2="36.8884">
						<animate attributeName="y1" dur="750ms" values="16;16;18;28;18;16" repeatCount="indefinite"></animate>
						<animate attributeName="y2" dur="750ms" values="48;48;46;36;44;48" repeatCount="indefinite"></animate>
						<animate attributeName="stroke-opacity" dur="750ms" values="1;1;.4;.5;.8;1" repeatCount="indefinite"></animate>
					</line>
					<line x1="38" x2="38" y1="19.1105" y2="44.8895">
						<animate attributeName="y1" dur="750ms" values="18;16;16;18;28;18" repeatCount="indefinite"></animate>
						<animate attributeName="y2" dur="750ms" values="44;48;48;46;36;44" repeatCount="indefinite"></animate>
						<animate attributeName="stroke-opacity" dur="750ms" values=".8;1;1;.4;.5;.8" repeatCount="indefinite"></animate>
					</line>
					<line x1="52" x2="52" y1="16.2221" y2="47.7779">
						<animate attributeName="y1" dur="750ms" values="28;18;16;16;18;28" repeatCount="indefinite"></animate>
						<animate attributeName="y2" dur="750ms" values="36;44;48;48;46;36" repeatCount="indefinite"></animate>
						<animate attributeName="stroke-opacity" dur="750ms" values=".5;.8;1;1;.4;.5" repeatCount="indefinite"></animate>
					</line>
				</g>
			</svg>
		</span>
	)
}

export function Dots(props) {
	return (
		<span className="indicator" style={{
			stroke: props.color, 
			fill: props.color,
			width: props.size ? `${+props.size}rem` : '1rem',
			height: props.size ? `${+props.size}rem` : '1rem',
		}}>
			<svg viewBox="0 0 64 64">
				<g>
					<circle cx="16" cy="32" strokeWidth="0" r="3.46676">
						<animate attributeName="fill-opacity" dur="750ms" values=".5;.6;.8;1;.8;.6;.5;.5" repeatCount="indefinite"></animate>
						<animate attributeName="r" dur="750ms" values="3;3;4;5;6;5;4;3" repeatCount="indefinite"></animate>
					</circle>
					<circle cx="32" cy="32" strokeWidth="0" r="4.46676">
						<animate attributeName="fill-opacity" dur="750ms" values=".5;.5;.6;.8;1;.8;.6;.5" repeatCount="indefinite"></animate>
						<animate attributeName="r" dur="750ms" values="4;3;3;4;5;6;5;4" repeatCount="indefinite"></animate>
					</circle>
					<circle cx="48" cy="32" strokeWidth="0" r="5.46676">
						<animate attributeName="fill-opacity" dur="750ms" values=".6;.5;.5;.6;.8;1;.8;.6" repeatCount="indefinite"></animate>
						<animate attributeName="r" dur="750ms" values="5;4;3;3;4;5;6;5" repeatCount="indefinite"></animate>
					</circle>
				</g>
			</svg>
		</span>
	)
}

export function Crescent(props) {
	return (
		<span className="indicator" style={{
			stroke: props.color, 
			fill: props.color,
			width: props.size ? `${+props.size}rem` : '1rem',
			height: props.size ? `${+props.size}rem` : '1rem',
		}}>
			<svg viewBox="0 0 64 64">
				<g>
					<circle strokeWidth="4" strokeDasharray="128" strokeDashoffset="82" r="26" cx="32" cy="32" fill="none" transform="rotate(215.995 32 32)">
						<animateTransform values="0,32,32;360,32,32" attributeName="transform" type="rotate" repeatCount="indefinite" dur="750ms"></animateTransform>
					</circle>
				</g>
			</svg>
		</span>
	)
}

export function Circles(props) {
	return (
		<span className="indicator" style={{
			stroke: props.color, 
			fill: props.color,
			width: props.size ? `${+props.size}rem` : '1rem',
			height: props.size ? `${+props.size}rem` : '1rem',
		}}>
			<svg viewBox="0 0 64 64">
				<g>
					<circle r="5" cx="24" cy="0" transform="translate(32,32)" strokeWidth="0">
						<animate attributeName="fill-opacity" dur="750ms" values="1;.9;.85;.7;.4;.3;.3;.3;1" repeatCount="indefinite"></animate>
					</circle>
					<circle r="5" cx="16.970562748477143" cy="16.97056274847714" transform="translate(32,32)" strokeWidth="0">
						<animate attributeName="fill-opacity" dur="750ms" values=".3;1;.9;.85;.7;.4;.3;.3;.3" repeatCount="indefinite"></animate>
					</circle>
					<circle r="5" cx="1.4695761589768238e-15" cy="24" transform="translate(32,32)" strokeWidth="0">
						<animate attributeName="fill-opacity" dur="750ms" values=".3;.3;1;.9;.85;.7;.4;.3;.3" repeatCount="indefinite"></animate>
					</circle>
					<circle r="5" cx="-16.97056274847714" cy="16.970562748477143" transform="translate(32,32)" strokeWidth="0">
						<animate attributeName="fill-opacity" dur="750ms" values=".3;.3;.3;1;.9;.85;.7;.4;.3" repeatCount="indefinite"></animate>
					</circle>
					<circle r="5" cx="-24" cy="2.9391523179536475e-15" transform="translate(32,32)" strokeWidth="0">
						<animate attributeName="fill-opacity" dur="750ms" values=".4;.3;.3;.3;1;.9;.85;.7;.4" repeatCount="indefinite"></animate>
					</circle>
					<circle r="5" cx="-16.970562748477143" cy="-16.97056274847714" transform="translate(32,32)" strokeWidth="0">
						<animate attributeName="fill-opacity" dur="750ms" values=".7;.4;.3;.3;.3;1;.9;.85;.7" repeatCount="indefinite"></animate>
					</circle>
					<circle r="5" cx="-4.408728476930472e-15" cy="-24" transform="translate(32,32)" strokeWidth="0">
						<animate attributeName="fill-opacity" dur="750ms" values=".85;.7;.4;.3;.3;.3;1;.9;.85" repeatCount="indefinite"></animate>
					</circle>
					<circle r="5" cx="16.970562748477136" cy="-16.970562748477143" transform="translate(32,32)" strokeWidth="0">
						<animate attributeName="fill-opacity" dur="750ms" values=".9;.85;.7;.4;.3;.3;.3;1;.9" repeatCount="indefinite"></animate>
					</circle>
				</g>
			</svg>
		</span>
	)
}

export function Bubbles(props) {
	return (
		<span className="indicator" style={{
			stroke: props.color, 
			fill: props.color,
			width: props.size ? `${+props.size}rem` : '1rem',
			height: props.size ? `${+props.size}rem` : '1rem',
		}}>
			<svg viewBox="0 0 64 64">
				<g strokeWidth="0">
					<circle cx="24" cy="0" transform="translate(32,32)" r="1.4485">
						<animate attributeName="r" dur="750ms" values="8;7;6;5;4;3;2;1;8" repeatCount="indefinite"></animate>
					</circle>
					<circle cx="16.970562748477143" cy="16.97056274847714" transform="translate(32,32)" r="2.4485">
						<animate attributeName="r" dur="750ms" values="1;8;7;6;5;4;3;2;1" repeatCount="indefinite"></animate>
					</circle>
					<circle cx="1.4695761589768238e-15" cy="24" transform="translate(32,32)" r="3.4485">
						<animate attributeName="r" dur="750ms" values="2;1;8;7;6;5;4;3;2" repeatCount="indefinite"></animate>
					</circle>
					<circle cx="-16.97056274847714" cy="16.970562748477143" transform="translate(32,32)" r="4.4485">
						<animate attributeName="r" dur="750ms" values="3;2;1;8;7;6;5;4;3" repeatCount="indefinite"></animate>
					</circle>
					<circle cx="-24" cy="2.9391523179536475e-15" transform="translate(32,32)" r="5.4485">
						<animate attributeName="r" dur="750ms" values="4;3;2;1;8;7;6;5;4" repeatCount="indefinite"></animate>
					</circle>
					<circle cx="-16.970562748477143" cy="-16.97056274847714" transform="translate(32,32)" r="6.4485">
						<animate attributeName="r" dur="750ms" values="5;4;3;2;1;8;7;6;5" repeatCount="indefinite"></animate>
					</circle>
					<circle cx="-4.408728476930472e-15" cy="-24" transform="translate(32,32)" r="7.4485">
						<animate attributeName="r" dur="750ms" values="6;5;4;3;2;1;8;7;6" repeatCount="indefinite"></animate>
					</circle>
					<circle cx="16.970562748477136" cy="-16.970562748477143" transform="translate(32,32)" r="4.86048">
						<animate attributeName="r" dur="750ms" values="7;6;5;4;3;2;1;8;7" repeatCount="indefinite"></animate>
					</circle>
				</g>
			</svg>
		</span>
	)
}

export function Balls(props) {
	return (
		<span className="indicator" style={{
			stroke: props.color, 
			fill: props.color,
			width: props.size ? `${+props.size}rem` : '1rem',
			height: props.size ? `${+props.size}rem` : '1rem',
		}}>	
			<svg viewBox="0 0 100 100">
				<g transform="rotate(0 50 50)">
					<circle r="5" cx="22" cy="50">
						<animateTransform attributeName="transform" type="translate" begin="0s" repeatCount="indefinite" dur="1s" values="0 0;27.999999999999996 -28" keyTimes="0;1"/>
				    	<animate attributeName="fill" dur="1s" begin="0s" repeatCount="indefinite"  keyTimes="0;1"/>
				  	</circle>
				</g>
				<g transform="rotate(90 50 50)">
			  		<circle r="5" cx="22" cy="50">
			    		<animateTransform attributeName="transform" type="translate" begin="0s" repeatCount="indefinite" dur="1s" values="0 0;27.999999999999996 -28" keyTimes="0;1"/>
			    		<animate attributeName="fill" dur="1s" begin="0s" repeatCount="indefinite"  keyTimes="0;1"/>
			  		</circle>
				</g>
				<g transform="rotate(180 50 50)">
					<circle r="5" cx="22" cy="50">
			    		<animateTransform attributeName="transform" type="translate" begin="0s" repeatCount="indefinite" dur="1s" values="0 0;27.999999999999996 -28" keyTimes="0;1"/>
			    		<animate attributeName="fill" dur="1s" begin="0s" repeatCount="indefinite"  keyTimes="0;1"/>
			  		</circle>
				</g>
				<g transform="rotate(270 50 50)">
					<circle r="5" cx="22" cy="50">
			    		<animateTransform attributeName="transform" type="translate" begin="0s" repeatCount="indefinite" dur="1s" values="0 0;27.999999999999996 -28" keyTimes="0;1"/>
			    		<animate attributeName="fill" dur="1s" begin="0s" repeatCount="indefinite"  keyTimes="0;1"/>
			  		</circle>
				</g>
			</svg>
		</span>
	)
}

export function Gps(props) {
	return (
		<span className="indicator" style={{
			stroke: props.color, 
			fill: props.color,
			width: props.size ? `${+props.size}rem` : '1rem',
			height: props.size ? `${+props.size}rem` : '1rem',
		}}>	
			<svg viewBox="0 0 100 100">
				<circle cx="50" cy="50" r="20">
					<animate attributeName="opacity" from="1" to="1" dur="1s" repeatCount="indefinite" values="1;1;0;0;1" keyTimes="0;0.4;0.5;0.9;1"></animate>
				</circle>
				<path opacity="0.7" d="M90,45h-1.3C86.4,27.5,72.5,13.6,55,11.3V10c0-2.8-2.2-5-5-5s-5,2.2-5,5v1.3C27.5,13.6,13.6,27.5,11.3,45H10 c-2.8,0-5,2.2-5,5s2.2,5,5,5h1.3C13.6,72.5,27.5,86.4,45,88.7V90c0,2.8,2.2,5,5,5s5-2.2,5-5v-1.3C72.5,86.4,86.4,72.5,88.7,55H90 c2.8,0,5-2.2,5-5S92.8,45,90,45z M55,80.6V80c0-2.8-2.2-5-5-5s-5,2.2-5,5v0.6C31.9,78.5,21.5,68.1,19.4,55H20c2.8,0,5-2.2,5-5 s-2.2-5-5-5h-0.6C21.5,31.9,31.9,21.5,45,19.4V20c0,2.8,2.2,5,5,5s5-2.2,5-5v-0.6C68.1,21.5,78.5,31.9,80.6,45H80c-2.8,0-5,2.2-5,5 s2.2,5,5,5h0.6C78.5,68.1,68.1,78.5,55,80.6z">
					<animateTransform attributeName="transform" type="rotate" from="0 50 50" to="90 50 50" dur="1s" repeatCount="indefinite" values="0 50 50;90 50 50;90 50 50" keyTimes="0;0.5;1"></animateTransform>
				</path>
			</svg>
		</span>
	)
}

export function Battery(props) {
	return (
		<span className="indicator" style={{
			stroke: props.color, 
			fill: props.color,
			width: props.size ? `${+props.size}rem` : '1rem',
			height: props.size ? `${+props.size}rem` : '1rem',
		}}>	
			<svg viewBox="0 0 100 100">
				<path d="M65,19v-6c0-3.3-2.7-6-6-6H41c-3.3,0-6,2.7-6,6v6H65z"></path>
				<path d="M76,17H24.1c-2.3,0-4.1,1.8-4.1,4v70c0,2.2,1.9,4,4.1,4H76c2.3,0,4-1.8,4-4V21C80,18.8,78.3,17,76,17z M72,29v54v4h-4.3 H32.4H28v-4V29v-4h4.4h35.3H72V29z"></path>
				<rect x="35" y="72" width="30" height="10">
					<animate attributeName="opacity" from="0" to="1" dur="1s" repeatCount="indefinite" values="0;0;1;1" keyTimes="0;0.1;0.3;1"></animate>
				</rect>
				<rect x="35" y="58" width="30" height="10">
					<animate attributeName="opacity" from="0" to="1" dur="1s" repeatCount="indefinite" values="0;0;1;1" keyTimes="0;0.3;0.5;1"></animate>
				</rect>
				<rect x="35" y="44" width="30" height="10">
					<animate attributeName="opacity" from="0" to="1" dur="1s" repeatCount="indefinite" values="0;0;1;1" keyTimes="0;0.5;0.7;1"></animate>
				</rect>
				<rect x="35" y="30" width="30" height="10">
					<animate attributeName="opacity" from="0" to="1" dur="1s" repeatCount="indefinite" values="0;0;1;1" keyTimes="0;0.7;0.9;1"></animate>
				</rect>
			</svg>
		</span>
	)
}

export function Pacman(props) {
	return (
		<span className="indicator" style={{
			stroke: props.color, 
			fill: props.color,
			width: props.size ? `${+props.size}rem` : '1rem',
			height: props.size ? `${+props.size}rem` : '1rem',
		}}>	
			<svg viewBox="0 0 100 100">
				<path d="M0 50A50 50 0 1 0 100 50" transform="rotate(30 50 50)">
					<animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" from="30 50 50" to="30 50 50" values="30 50 50;0 50 50;30 50 50"/>
				</path>
				<path d="M0 50A50 50 0 1 1 100 50" transform="rotate(-30 50 50)">
					<animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" from="-30 50 50" to="-30 50 50" values="-30 50 50;0 50 50;-30 50 50"/>
				</path>
			</svg>
		</span>
	)
}

export function Cube(props) {
	return (
		<span className="indicator" style={{
			stroke: props.color, 
			fill: props.color,
			width: props.size ? `${+props.size}rem` : '1rem',
			height: props.size ? `${+props.size}rem` : '1rem',
		}}>	
			<svg viewBox="0 0 100 100">
				<g transform="translate(25 25)">
					<rect x="-20" y="-20" width="35" height="35" opacity="1">
						<animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform>
					</rect>
				</g>
				<g transform="translate(75 25)">
					<rect x="-20" y="-20" width="35" height="35" opacity="0.8">
						<animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0.1s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform>
					</rect>
				</g>
				<g transform="translate(25 75)">
					<rect x="-20" y="-20" width="35" height="35" opacity="0.6">
						<animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0.3s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform>
					</rect>
				</g>
				<g transform="translate(75 75)">
					<rect x="-20" y="-20" width="35" height="35" opacity="0.4">
						<animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0.2s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform>
					</rect>
				</g>
			</svg>
		</span>
	)
}

export function Gear(props) {
	return (
		<span className="indicator" style={{
			stroke: props.color, 
			fill: props.color,
			width: props.size ? `${+props.size}rem` : '1rem',
			height: props.size ? `${+props.size}rem` : '1rem',
		}}>	
			<svg viewBox="0 0 100 100">
				<path d="M75,50.5l5-1.5c-0.1-2.2-0.4-4.3-0.9-6.3l-5.2-0.1c-0.2-0.6-0.4-1.1-0.6-1.7l4-3.3c-0.9-1.9-2-3.8-3.2-5.5L69.2,34 c-0.4-0.5-0.8-0.9-1.2-1.3l2.4-4.6c-1.6-1.4-3.3-2.7-5.1-3.8l-3.7,3.6c-0.5-0.3-1.1-0.5-1.6-0.8l0.5-5.2c-2-0.7-4-1.3-6.2-1.6 l-2.1,4.8c-0.6-0.1-1.2-0.1-1.8-0.1l-1.5-5c-2.2,0.1-4.3,0.4-6.3,0.9l-0.1,5.2c-0.6,0.2-1.1,0.4-1.7,0.6l-3.3-4 c-1.9,0.9-3.8,2-5.5,3.2l1.9,4.9c-0.5,0.4-0.9,0.8-1.3,1.2l-4.6-2.4c-1.4,1.6-2.7,3.3-3.8,5.1l3.6,3.7c-0.3,0.5-0.5,1.1-0.8,1.6 l-5.2-0.5c-0.7,2-1.3,4-1.6,6.2l4.8,2.1c-0.1,0.6-0.1,1.2-0.1,1.8l-5,1.5c0.1,2.2,0.4,4.3,0.9,6.3l5.2,0.1c0.2,0.6,0.4,1.1,0.6,1.7 l-4,3.3c0.9,1.9,2,3.8,3.2,5.5l4.9-1.9c0.4,0.5,0.8,0.9,1.2,1.3l-2.4,4.6c1.6,1.4,3.3,2.7,5.1,3.8l3.7-3.6c0.5,0.3,1.1,0.5,1.6,0.8 l-0.5,5.2c2,0.7,4,1.3,6.2,1.6l2.1-4.8c0.6,0.1,1.2,0.1,1.8,0.1l1.5,5c2.2-0.1,4.3-0.4,6.3-0.9l0.1-5.2c0.6-0.2,1.1-0.4,1.7-0.6 l3.3,4c1.9-0.9,3.8-2,5.5-3.2L66,69.2c0.5-0.4,0.9-0.8,1.3-1.2l4.6,2.4c1.4-1.6,2.7-3.3,3.8-5.1l-3.6-3.7c0.3-0.5,0.5-1.1,0.8-1.6 l5.2,0.5c0.7-2,1.3-4,1.6-6.2l-4.8-2.1C74.9,51.7,75,51.1,75,50.5z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15 C65,58.3,58.3,65,50,65z">
					<animateTransform attributeName="transform" type="rotate" from="0 50 50" to="90 50 50" dur="1s" repeatCount="indefinite"></animateTransform>
				</path>
			</svg>
		</span>
	)
}

export function Msgs(props) {
	return (
		<span className="indicator" style={{
			stroke: props.color, 
			fill: props.color,
			width: props.size ? `${+props.size}rem` : '1rem',
			height: props.size ? `${+props.size}rem` : '1rem',
		}}>	
			<svg viewBox="0 0 100 100">
				<path d="M78,19H22c-6.6,0-12,5.4-12,12v31c0,6.6,5.4,12,12,12h37.2c0.4,3,1.8,5.6,3.7,7.6c2.4,2.5,5.1,4.1,9.1,4 c-1.4-2.1-2-7.2-2-10.3c0-0.4,0-0.8,0-1.3h8c6.6,0,12-5.4,12-12V31C90,24.4,84.6,19,78,19z"></path>
				<circle cx="30" cy="47" r="5" fill="#fff">
					<animate attributeName="opacity" from="0" to="1" values="0;1;1" keyTimes="0;0.2;1" dur="1s" repeatCount="indefinite"></animate>
				</circle>
				<circle cx="50" cy="47" r="5" fill="#fff">
					<animate attributeName="opacity" from="0" to="1" values="0;0;1;1" keyTimes="0;0.2;0.4;1" dur="1s" repeatCount="indefinite"></animate>
				</circle>
				<circle cx="70" cy="47" r="5" fill="#fff">
					<animate attributeName="opacity" from="0" to="1" values="0;0;1;1" keyTimes="0;0.4;0.6;1" dur="1s" repeatCount="indefinite"></animate>
				</circle>
			</svg>
		</span>
	)
}