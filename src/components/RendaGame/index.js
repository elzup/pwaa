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
				<p>
					<button onClick={props.rendaGameStart}>Start!</button>
					<style jsx>{`
						button {
							width: 100%;
							height: 200px;
							background: blue;
							color: white;
						}
					`}</style>
				</p>
				<p>
					<span>Score: {props.game.prevScore}</span>
				</p>
				<p>
					<span>MaxScore: {props.game.maxScore}</span>
				</p>
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
				<p>{props.game.time}</p>
				<p>Score: {props.game.score}</p>
				<p>
					<button onClick={() => props.rendaPoint(1)}>Tap</button>
					<style jsx>{`
						button {
							margin-top: 100px;
							width: 100%;
							height: 200px;
							background: blue;
							color: white;
						}
					`}</style>
				</p>
			</div>
		)
	}
}

export default RengaGame
