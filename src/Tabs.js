import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Tabs, Tab } from '@material-ui/core'

import { Context } from './Wrapper'


class NavTabs extends React.Component {
	static contextType = Context

	render() {
		const { TabProps, ...TabsProps } = this.props
		// noinspection JSDeprecatedSymbols
		const tabs = this.context.getTabsData()
		// noinspection JSDeprecatedSymbols
		const selectedIndex = this.context.getSelectedTabIndex()

		return (
			<Tabs
				{...TabsProps || {}}
				value={selectedIndex}
			>
				{tabs.map((
					{ label, path, component, selected, fullPath, ...moreTabProps },
					idx
				) => (
					<Tab
						{...TabProps || {}}
						{...moreTabProps}
						key={idx}
						label={label}
						component={Link}
						to={fullPath}
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
