// @flow
import * as React from 'react'
import type { Speed9Game } from '../../types'

export type Props = {
	game: Speed9Game,
	record: Function,
}

export type State = {
	invervalId: number,
	time: number,
	process: 'start' | 'wait',
}

class Speed9Component extends React.Component<Props, State> {
	state = {
		invervalId: 0,
		time: 0,
		process: 'wait',
	}

	render() {
		return (
			<div>
				<h1>9ゲーム</h1>
				<div>
					{this.renderStart()}
					{this.renderProgress()}
				</div>
			</div>
		)
	}

	renderStart = () => {
		const { props } = this
		if (props.game.isStarting) {
			return null
		}
		return (
			<div>
				<p>
					<span>MaxScore: {props.game.maxScore}</span>
				</p>
			</div>
		)
	}

	renderProgress = () => {
		const { props, state } = this
		if (!props.game.isStarting) {
			return null
		}
		return (
			<div>
				<p>Time: {state.time}</p>
			</div>
		)
	}
}

export default Speed9Component
