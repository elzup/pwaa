// @flow

import { connect, type Connector } from 'react-redux'
import type { State } from '../../types'
import RendaGameComponent, { type Props } from '../../components/RendaGame'
import { rendaGameStart, rendaPoint, rendaGameEnd } from './actions'
// import * as selectors from './selectors'

type OProps = {}
const ms = (state: State) => ({
	game: state.RendaGame,
})

const conn: Connector<OProps, Props> = connect(ms, {
	rendaGameStart,
	rendaPoint,
	rendaGameEnd,
})

export default conn(RendaGameComponent)
