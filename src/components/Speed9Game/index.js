// @flow
import * as React from 'react'
import type { Speed9Game } from '../../types'

export type Props = {
	game: Speed9Game,
	record: Function,
}

export type State = {
	intervalId: number,
	time: number,
	process: 'run' | 'wait',
}

class Speed9Component extends React.Component<Props, State> {
	state = {
		intervalId: 0,
		time: 0,
		process: 'wait',
	}

	render() {
		return (
			<div>
				<h1>9ゲーム</h1>
				<div>
					{this.renderWait()}
					{this.renderRun()}
				</div>
			</div>
		)
	}

	renderWait = () => {
		const { props, state } = this
		if (state.process !== 'wait') {
			return null
		}
		return (
			<div>
				<p>
					<span>MaxScore: {props.game.maxScore}</span>
				</p>
				<p>
					<button onClick={this.start}>Start</button>
				</p>
			</div>
		)
	}

	start = () => {
		const intervalId = setInterval(this.countDown, 10)
		this.setState({ process: 'run', intervalId, time: 0 })
	}

	countDown = () => {
		this.setState({ time: this.state.time + 1 })
	}

	renderRun = () => {
		const { props, state } = this
		if (state.process !== 'run') {
			return null
		}
		return (
			<div>
				<p>Time: {state.time / 100}</p>
			</div>
		)
	}
}

export default Speed9Component
