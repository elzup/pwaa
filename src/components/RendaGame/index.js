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
					<span>Score: {props.game.score}</span>
					{!props.game.isStarting || <button>Tap</button>}
					{props.game.isStarting || (
						<div>
							<button onClick={props.rendaGameStart}>Start!</button>
							<span>MaxScore: {props.game.maxScore}</span>
						</div>
					)}
				</div>
			</div>
		)
	}
}

export default RengaGame
