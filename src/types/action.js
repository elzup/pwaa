// @flow
import type { Action as RendaGameAction } from '../containers/RendaGame/actionTypes'

export type ReduxInitAction = {
	type: '@@INIT',
}

export type Action = ReduxInitAction | RendaGameAction
