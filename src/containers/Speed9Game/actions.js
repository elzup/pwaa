// @flow
import { RECORD } from './actionTypes'
import type { Record } from './actionTypes'

export function record(score: number): Record {
	return {
		type: RECORD,
		score,
	}
}
