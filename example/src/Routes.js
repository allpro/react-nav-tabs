import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from './Home'
import SimpleTabs from './SimpleTabs'
import NestedTabs from './NestedTabs'
import TabsWithRootPath from './TabsWithRootPath'

const Routes = () => (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route path="/simple-tabs" component={SimpleTabs} />
		<Route path="/tabs-with-root-path" component={TabsWithRootPath} />
		<Route path="/nested-tabs" exact component={NestedTabs} />
		<Route path="/nested-tabs/:tabLevel1" component={NestedTabs} />

		{/* catch any invalid URLs */}
		<Redirect to="/" />
	</Switch>
)

export default Routes
