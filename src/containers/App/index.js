// @flow
import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from '../Home'
import Renda from '../RendaGame'
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
			</ul>

			<hr />

			<Route exact path="/" component={Home} />
			<Route path="/renda" component={Renda} />
		</div>
	</Router>
)
export default App
