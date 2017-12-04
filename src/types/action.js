// @flow
import type { Action as RendaGameAction } from '../containers/RendaGame/actionTypes'
import type { Action as Speed9GameAction } from '../containers/Speed9Game/actionTypes'

export type ReduxInitAction = {
	type: '@@INIT',
}

export type Action = ReduxInitAction | RendaGameAction | Speed9GameAction
