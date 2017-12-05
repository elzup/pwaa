// @flow
import type { Action, Speed9Game } from '../../types'
import { Actions } from './actionTypes'

export type State = Speed9Game

export const initialState: State = {
	prevScore: null,
	maxScore: null,
}

export default function(state: State = initialState, action: Action): State {
	switch (action.type) {
		case Actions.RECORD:
			return {
				...state,
				prevScore: action.score,
				maxScore: state.maxScore
					? Math.min(action.score, state.maxScore)
					: action.score,
			}

		default:
			return state
	}
}
