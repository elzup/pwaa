// @flow
import reducer, { initialState } from './reducer'
import * as actions from './actions'

test('provide the initial state', () => {
	expect(reducer(undefined, { type: '@@INIT' })).toEqual(initialState)
})

test('handle RECORD', () => {
	expect(reducer(initialState, actions.record(10))).toEqual({
		maxScore: 10,
		prevScore: 10,
	})
})

test('handle RECORD update', () => {
	expect(reducer({ ...initialState, maxScore: 10 }, actions.record(5))).toEqual(
		{
			maxScore: 5,
			prevScore: 5,
		},
	)
})

test('handle RECORD no update', () => {
	expect(reducer({ ...initialState, maxScore: 2 }, actions.record(5))).toEqual({
		maxScore: 2,
		prevScore: 5,
	})
})
