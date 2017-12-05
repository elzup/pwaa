// @flow
import * as React from 'react'
import type { Speed9Game } from '../../types'

import _ from 'lodash'

export type Props = {
	game: Speed9Game,
	record: Function,
}

export type State = {
	intervalId: number,
	time: number,
	point: number,
	nums: nubmer[],
	process: 'run' | 'wait',
}

class Speed9Component extends React.Component<Props, State> {
	state = {
		intervalId: 0,
		time: 0,
		point: 0,
		process: 'wait',
		nums: [],
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
					<span>Score: {props.game.prevScore || '-'}</span>
				</p>
				<p>
					<span>MaxScore: {props.game.maxScore || '-'}</span>
				</p>
				<p>
					<button onClick={this.start}>Start</button>
				</p>
			</div>
		)
	}

	start = () => {
		const intervalId = setInterval(this.countDown, 10)
		this.setState({
			process: 'run',
			intervalId,
			time: 0,
			point: 0,
			nums: _.shuffle(_.range(1, 10)),
		})
	}

	countDown = () => {
		this.setState({ time: this.state.time + 1 })
	}

	finish = () => {
		clearInterval(this.state.intervalId)
		this.props.record(this.state.time / 100)
		this.setState({ process: 'wait', time: 0 })
	}

	pushHandle = (num: number) => {
		return () => {
			const nextPoint = this.state.point + 1
			console.log(this.state)
			if (nextPoint === num) {
				this.setState({ point: nextPoint })
				if (nextPoint === 9) {
					this.finish()
				}
			}
		}
	}

	renderRun = () => {
		const { props, state } = this
		if (state.process !== 'run') {
			return null
		}
		return (
			<div>
				<p>Time: {state.time / 100}</p>
				<div className="box">
					{state.nums.map(num => (
						<div key={num} className="point_button">
							<button
								className={num <= state.point ? 'disable' : 'active'}
								onClick={this.pushHandle(num)}
							>
								{num}
							</button>
						</div>
					))}
				</div>
				<style jsx>{`
					.box {
						display: flex;
						flex-wrap: wrap;
					}

					.point_button {
						width: 30%;
					}

					button {
						height: 100px;
						background: #00900b;
						width: 100%;
						font-size: 3em;
						color: white;
					}

					.disable {
						background: gray;
					}
				`}</style>
			</div>
		)
	}
}

export default Speed9Component
