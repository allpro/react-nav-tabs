import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from './Home'
import SimpleTabs from './SimpleTabs'
import NestedTabs from './NestedTabs'

const Routes = () => (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route path="/simple-tabs" component={SimpleTabs} />
		<Route path="/nested-tabs" component={NestedTabs} />

		{/* catch any invalid URLs */}
		<Redirect to="/" />
	</Switch>
)

export default Routes
