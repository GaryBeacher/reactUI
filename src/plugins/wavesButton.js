export default class wavesButton {
	constructor(elem, color) {
		this.elem = elem
		this.color = color || '#fff'
		this.size = 2 * Math.max(parseInt(this.elem.clientWidth, 10), parseInt(this.elem.clientHeight, 10))
		this.elem.style.position = 'relative'
		this.elem.style.overflow = 'hidden'
		this.init()
	}

	init() {
		this.elem.addEventListener('touchstart', () => {
			const dom = this.createDom(event)
			this.elem.appendChild(dom)
			this.run(dom)
			this.remove(dom, 2000)
		})
	}

	createDom(event) {
		const offsetX = event.touches[0].pageX - this.elem.offsetLeft
		const offsetY = event.touches[0].pageY - this.elem.offsetTop
		const div = document.createElement('div')
		div.style.cssText = `
			pointer-events: none;
			position: absolute;
			border-radius: 50%;
			background-color: ${this.color};
			opacity: .9;
			will-change: opacity, transform;
			transform: scale(0);
			left: -${this.size / 2 - offsetX}px;
			top: -${this.size / 2 - offsetY}px;
			transition: opacity 2s cubic-bezier(0.23, 1, 0.32, 1) 0ms, transform 1.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
			width: ${this.size}px;
			height: ${this.size}px;
		`
		return div
	}
	remove(dom, duration) {
		setTimeout(() => dom.parentNode.removeChild(dom), duration)
	}
	run(dom) {
		setTimeout(() => {
			dom.style.opacity = 0
			dom.style.transform = `scale(1)`
		}, 10)
	}
}