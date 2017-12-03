// @flow
import type { ThunkAction } from '../../types'
import * as actions from './actions'
const GAME_TIME = 5

function sleep(ms: number) {
	return new Promise(r => setTimeout(r, ms))
}

export function gameStart(): ThunkAction {
	return async dispatch => {
		dispatch(actions.rendaTimeCount(GAME_TIME))
		dispatch(actions.rendaGameStart())
		for (var i = GAME_TIME; i >= 0; i--) {
			await sleep(1000)
			dispatch(actions.rendaTimeCount(i))
		}
		dispatch(actions.rendaGameEnd())
	}
}
