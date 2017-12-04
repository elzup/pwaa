// @flow

import { connect, type Connector } from 'react-redux'
import type { State } from '../../types'
import RendaGameComponent, { type Props } from '../../components/Speed9Game'
import { record } from './actions'

type OProps = {}
const ms = (state: State) => ({
	game: state.Speed9Game,
})

const conn: Connector<OProps, Props> = connect(ms, {
	record,
})

export default conn(RendaGameComponent)
