// @flow
import { combineReducers } from './config'
import RendaGame from './containers/RendaGame/reducer'
import Speed9Game from './containers/Speed9Game/reducer'

export default combineReducers({
	RendaGame,
	Speed9Game,
})
