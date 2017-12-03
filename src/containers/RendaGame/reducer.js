// @flow
import type { Action, RendaGame } from '../../types'
import { Actions } from './actionTypes'

export type State = RendaGame

export const initialState: State = {
	isStarting: false,
	time: 0,
	score: 0,
	maxScore: 0,
}

export default function(state: State = initialState, action: Action): State {
	switch (action.type) {
		case Actions.RENDA_TIME_COUNT:
			return {
				...state,
				time: action.time,
			}

		case Actions.RENDA_GAME_START:
			return {
				...state,
				score: 0,
				isStarting: true,
			}

		case Actions.RENDA_GAME_END:
			return {
				...state,
				isStarting: false,
				score: 0,
				maxScore: Math.max(state.score, state.maxScore),
			}

		case Actions.RENDA_POINT:
			return {
				...state,
				score: state.score + action.scoreUp,
			}

		default:
			return state
	}
}
