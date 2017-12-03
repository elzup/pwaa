// @flow
import { RENDA_GAME_START, RENDA_GAME_END, RENDA_POINT } from './actionTypes'
import type { RendaGameStart, RendaGameEnd, RendaPoint } from './actionTypes'

export function rendaGameStart(): RendaGameStart {
	return {
		type: RENDA_GAME_START,
	}
}
export function rendaGameEnd(score: number): RendaGameEnd {
	return {
		type: RENDA_GAME_END,
		score,
	}
}
export function rendaPoint(scoreUp: number): RendaPoint {
	return {
		type: RENDA_POINT,
		scoreUp,
	}
}
