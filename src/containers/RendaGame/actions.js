// @flow
import {
	RENDA_GAME_START,
	RENDA_GAME_END,
	RENDA_POINT,
	RENDA_TIME_COUNT,
} from './actionTypes'
import type {
	RendaGameStart,
	RendaGameEnd,
	RendaPoint,
	RendaTimeCount,
} from './actionTypes'

export function rendaGameStart(): RendaGameStart {
	return {
		type: RENDA_GAME_START,
	}
}
export function rendaGameEnd(): RendaGameEnd {
	return {
		type: RENDA_GAME_END,
	}
}
export function rendaPoint(scoreUp: number): RendaPoint {
	return {
		type: RENDA_POINT,
		scoreUp,
	}
}
export function rendaTimeCount(time: number): RendaTimeCount {
	return {
		type: RENDA_TIME_COUNT,
		time,
	}
}
