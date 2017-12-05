// @flow
import type { State as RendaGame } from '../containers/RendaGame/reducer'
import type { State as Speed9Game } from '../containers/Speed9Game/reducer'

export type State = {
	RendaGame: RendaGame,
	Speed9Game: Speed9Game,
}
