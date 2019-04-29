import React from 'react'
import { Switch } from 'react-router-dom'

import { Context } from './Wrapper'
import PropsRoute from './PropsRoute'
import Placeholder from './Placeholder'

const isEmptyPath = path => !path || path === '/'


class Content extends React.Component {
	render() {
		const { context } = this
		const tabs = context.getTabsData()

		// Route component is rendered if the path matches the current URL
		// Use Switch wrapper to ensure only ONE component can render at a time
		return (
			<Switch>
				{tabs.map((tab, idx) => {
					const { label, path, component, exact, props } = tab
					// console.log(
					// 	'route:',
					// 	label,
					// 	'-',
					// 	path,
					// 	context.getTabPath(path),
					// 	{ props, tab }
					// )

					return (
						<PropsRoute
							key={idx}
							exact={exact || (exact !== false && isEmptyPath(path))}
							path={context.getTabPath(path)}
							component={component || Placeholder}
							{...props || {}}
						/>
					)
				})}
			</Switch>
		)
	}
}


Content.contextType = Context

export default Content
