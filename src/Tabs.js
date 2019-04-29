import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Tabs, Tab } from '@material-ui/core'

import { Context } from './Wrapper'

class NavTabs extends React.Component {
	static contextType = Context

	render() {
		const { props, context } = this
		const { TabProps, ...TabsProps } = props
		const tabs = context.getTabsData()

		return (
			<Tabs
				{...TabsProps || {}}
				value={context.getCurrentTabIndex()}
			>
				{tabs.map(({ label, path, component, ...moreTabProps }, idx) => (
					<Tab
						{...TabProps || {}}
						{...moreTabProps}
						key={idx}
						label={label}
						component={Link}
						to={context.getTabPath(path)}
					/>
				))}
			</Tabs>
		)
	}
}

const { object } = PropTypes

NavTabs.propTypes = {
	TabProps: object // Props to pass to EACH <Tab> component
}

export default NavTabs
