export let remLayout = () => {
	let rootDoc = document.documentElement,
		resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = () => {
			let clientWidth = Math.max(rootDoc.clientWidth, window.innerWidth)
			if(!clientWidth) return
			rootDoc.style.fontSize = 20 * (clientWidth / 320) + 'px'
		}
	recalc()
	window.addEventListener(resizeEvent, recalc, !1)
	window.addEventListener('DOMContentLoaded', recalc, !1)
}

export let activeEffect = () => {
	function addlink(e) {
		const target = e.target
		let link = ''
		if(target.nodeName === 'A') {
			link = target
		} else {
			link = target.parentNode
			while (link && link.nodeName !== 'A') {
				link = link.parentNode
			}
		}
		link && link.classList.add('active')
	}
	function removelink(e) {
		const target = e.target
		let link = ''
		if(target.nodeName === 'A') {
			link = target
		} else {
			link = target.parentNode
			while (link && link.nodeName !== 'A') {
				link = link.parentNode
			}
		}
		link && link.classList.remove('active')
	}
	document.body.addEventListener('touchstart', addlink)
	document.body.addEventListener('touchend', removelink)
}

export let getJSON = url => new Promise((resolve, reject) => {
	let xhr = new XMLHttpRequest()
	xhr.open('GET', url)
	xhr.onreadystatechange = () => {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				resolve(xhr.response)
			} else {
				reject(new Error('加载失败'))
			}
		}
	}
	xhr.responseType = 'json'
	xhr.send()
})

export let timeFormat = (time, item = 'y-m-d') => {
	time = time - 0 > 1e10 ? time : time * 1000
	let t = new Date(time)
	let tf = i => (i < 10 ? '0' : '') + i

	return item.replace(/y|m|d/g, imatch => imatch === 'y' 
		? tf(t.getFullYear()) : imatch === 'm' 
		? tf(t.getMonth() + 1) : tf(t.getDate()))
}

export let time2md = time => {
	const arr = time.split('-')
	const month = parseInt(arr[1], 10)
	const day = parseInt(arr[2], 10)

	return `${month}月${day}日`
}

export let time2w = time => {
	const arr = time.split('-')
	const year = parseInt(arr[0], 10)
	const month = parseInt(arr[1], 10)
	const day = parseInt(arr[2], 10)

	const weeks = ['日', '一', '二', '三', '四', '五', '六']

	return '周' + weeks[new Date(year, month - 1, day).getDay()]
}
export let timeStamp = str => {
	const arr = str.split('-')
	const year = +arr[0]
	const month = +arr[1]
	const day = +arr[2]
	return new Date(year, month - 1, day).getTime()
}

//身份证验证算法
export let checkId = str => {
	//加权因子
	const powers = ["7", "9", "10", "5", "8", "4", "2", "1", "6", "3", "7", "9", "10", "5", "8", "4", "2"]
	//校验码
	const parityBit = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"]
	
	if((typeof str !== 'string' && 
		typeof str !== 'number') || 
		(str + '').length !== 18 ||
		isNaN(str.substr(0, 17))) {
		console.warn('参数错误')
		return false
	}
	const _str = str + ''
	const num = _str.substr(0, 17)
	const lastBit = _str.substr(17).toUpperCase()
	let sum = 0
	for(let i = 0; i < 17; i++) {
		sum += parseInt(num.charAt(i), 10) * parseInt(powers[i], 10)	
	}
	if(parityBit[sum % 11] !== lastBit) {
		return false
	}
	return true
}


//对象代理
export function _dataProxy(object, key) {
	Object.defineProperty(object, key, {
		configurable: true,
		enumerable: true,
		get: () => object.data[key],
		set: val => object.data[key] = val
	})
}

//随机颜色
export function randomColor() {
	return `#${Math.floor(Math.random() * 0xffffff).toString(16)}`
}

//滚动条位置
export function cacheScrollBar(path, cache) {
	
}

//数组随机排序
// export function _shuffle(array) {
// 	var i = 0
// 	var index_arr = []
// 	while(true) {
// 		if(array.length === index_arr.length) {
// 			break
// 		}
// 		i = ~~(Math.random() * array.length)
// 		if(index_arr.some(v => v === i)) {
// 			continue
// 		}
// 		index_arr.push(i)
// 	}
// 	var res = index_arr.map(v => array[v])
// 	return Array.isArray(array) ? res : res.join('')
// }