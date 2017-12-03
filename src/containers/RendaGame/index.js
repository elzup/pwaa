// @flow

import { connect, type Connector } from 'react-redux'
import type { State } from '../../types'
import RendaGameComponent, { type Props } from '../../components/RendaGame'
import { rendaPoint, rendaGameEnd } from './actions'
import { gameStart } from './logic'
// import * as selectors from './selectors'

type OProps = {}
const ms = (state: State) => ({
	game: state.RendaGame,
})

const conn: Connector<OProps, Props> = connect(ms, {
	rendaGameStart: gameStart,
	rendaPoint,
	rendaGameEnd,
})

export default conn(RendaGameComponent)
