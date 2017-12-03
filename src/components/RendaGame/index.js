// @flow
import * as React from 'react'
import type { RendaGame } from '../../types'

export type Props = {
	game: RendaGame,
	rendaGameStart: Function,
	rendaPoint: Function,
	rendaGameEnd: Function,
}

export type State = {
	invervalId: number,
}

class RengaGame extends React.Component<Props> {
	render() {
		const { props } = this
		return (
			<div>
				<h1>連打ゲーム</h1>
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
				<button onClick={props.rendaGameStart}>Start!</button>
				<span>MaxScore: {props.game.maxScore}</span>
			</div>
		)
	}

	renderProgress = () => {
		const { props } = this
		if (!props.game.isStarting) {
			return null
		}
		return (
			<div>
				<span>Score: {props.game.score}</span>
				<button onClick={() => props.rendaPoint(1)}>Tap</button>
			</div>
		)
	}
}

export default RengaGame
