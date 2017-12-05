// @flow
export const RECORD: 'Speed9Game/RECORD' = 'Speed9Game/RECORD'

export const Actions = {
	RECORD,
}

export type Record = {
	type: typeof RECORD,
	score: number,
}

export type Action = Record
