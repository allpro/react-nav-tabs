import React from 'react'
import { render } from 'react-dom'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import App from './App'

const isDocSite = /allpro\.github\.io/.test(window.location.hostname)

function NavTabsDemo() {
	return (
		<Router basename={isDocSite ? '/react-nav-tabs' : ''}>
			<Switch>
				<Route path="/" exact component={App} />
				<Route path="/:tabL1" component={App} />
			</Switch>
		</Router>
	)
}

render(<NavTabsDemo />, document.getElementById('root'))
