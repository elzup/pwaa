// @flow
export const RENDA_GAME_START: 'RendaGame/RENDA_GAME_START' =
	'RendaGame/RENDA_GAME_START'
export const RENDA_GAME_END: 'RendaGame/RENDA_GAME_END' =
	'RendaGame/RENDA_GAME_END'
export const RENDA_POINT: 'RendaGame/RENDA_POINT' = 'RendaGame/RENDA_POINT'
export const RENDA_TIME_COUNT: 'RendaGame/RENDA_TIME_COUNT' =
	'RendaGame/RENDA_TIME_COUNT'

export const Actions = {
	RENDA_GAME_START,
	RENDA_GAME_END,
	RENDA_POINT,
	RENDA_TIME_COUNT,
}

export type RendaGameStart = {
	type: typeof RENDA_GAME_START,
}

export type RendaGameEnd = {
	type: typeof RENDA_GAME_END,
}
export type RendaPoint = {
	type: typeof RENDA_POINT,
	scoreUp: number,
}

export type RendaTimeCount = {
	type: typeof RENDA_TIME_COUNT,
	time: number,
}

export type Action = RendaGameStart | RendaGameEnd | RendaPoint | RendaTimeCount
