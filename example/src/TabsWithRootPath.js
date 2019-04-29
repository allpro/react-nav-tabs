import React from 'react'

import NavTabs, { Tabs, Content } from 'react-nav-tabs'


const rootPath = 'one'

const tabs = [
	{
		label: 'Tab One',
		path: '',
		props: { text: 'Placeholder for "Tab One"' }
	},
	{
		label: 'Tab Two',
		path: 'two',
		props: { text: 'Placeholder for "Tab Two"' }
	},
	{
		label: 'Tab Three',
		path: 'three',
		props: { text: 'Placeholder for "Tab Three"' }
	}
]

function SimpleTabs() {
	return (
		<NavTabs
			tabs={tabs}
			rootPath={rootPath}
		>
			<Tabs />
			<Content />
		</NavTabs>
	)
}

export default SimpleTabs
