// @flow
import type { ThunkAction } from '../../types'
import * as actions from './actions'

function sleep(ms: number) {
	return new Promise(r => setTimeout(r, ms))
}

export function gameStart(): ThunkAction {
	return async dispatch => {
		dispatch(actions.rendaTimeCount(30))
		dispatch(actions.rendaGameStart())
		for (var i = 30; i >= 0; i--) {
			await sleep(1000)
			dispatch(actions.rendaTimeCount(i))
		}
		dispatch(actions.rendaGameEnd())
	}
}
