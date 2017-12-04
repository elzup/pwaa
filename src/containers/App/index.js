// @flow
import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from '../Home'
import Renda from '../RendaGame'
import Speed9 from '../Speed9Game'
import StyledLink from '../../components/StyledLink'

const App = () => (
	<Router>
		<div>
			<ul>
				<li>
					<StyledLink to="/" label="Home" />
				</li>
				<li>
					<StyledLink to="/renda" label="Renda" />
				</li>
				<li>
					<StyledLink to="/speed9" label="Speed9" />
				</li>
			</ul>

			<hr />

			<Route exact path="/" component={Home} />
			<Route path="/renda" component={Renda} />
			<Route path="/speed9" component={Speed9} />
		</div>
	</Router>
)
export default App
