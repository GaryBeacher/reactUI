import {createStore} from 'redux'

const loading_reducer = (state = false, action) => {
	switch (action.type) {
		case 'SHOW':
			return action.display
		case 'HIDDEN':
			return action.display
		default:
			return state
	}
}

const scrollbar_reducer = (state = {}, action) => {
	state[action.type] = action.pos
	return state
}

const store = {
	loading: createStore(loading_reducer),
	scrollbar: createStore(scrollbar_reducer)
}

export default store