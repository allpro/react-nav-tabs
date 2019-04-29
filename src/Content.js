import React from 'react'
import { Switch } from 'react-router-dom'

import { Context } from './Wrapper'
import PropsRoute from './PropsRoute'
import Placeholder from './Placeholder'

const isEmptyPath = path => !path || path === '/'


class Content extends React.Component {
	static contextType = Context

	render() {
		const { context } = this
		const tabs = context.getTabsData()

		// Route component is rendered if the path matches the current URL
		// Use Switch wrapper to ensure only ONE component can render at a time
		return (
			<Switch>
				{tabs.map((tab, idx) => {
					const { path, fullPath, component, exact, props } = tab

					return (
						<PropsRoute
							key={idx}
							exact={exact || (exact !== false && isEmptyPath(path))}
							path={fullPath}
							component={component || Placeholder}
							{...props || {}}
						/>
					)
				})}
			</Switch>
		)
	}
}

export default Content
