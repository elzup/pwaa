// @flow
export const RENDA_GAME_START: 'RendaGame/RENDA_GAME_START' =
	'RendaGame/RENDA_GAME_START'
export const RENDA_GAME_END: 'RendaGame/RENDA_GAME_END' =
	'RendaGame/RENDA_GAME_END'
export const RENDA_POINT: 'RendaGame/RENDA_POINT' = 'RendaGame/RENDA_POINT'

export const Actions = {
	RENDA_GAME_START,
	RENDA_GAME_END,
	RENDA_POINT,
}

export type RendaGameStart = {
	type: typeof RENDA_GAME_START,
}

export type RendaGameEnd = {
	type: typeof RENDA_GAME_END,
	score: number,
}
export type RendaPoint = {
	type: typeof RENDA_POINT,
	scoreUp: number,
}

export type Action = RendaGameStart | RendaGameEnd | RendaPoint
