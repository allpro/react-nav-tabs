import React from 'react'

import NavTabs, { Tabs, Content } from 'react-nav-tabs'


const paths = {
	one: { path: 'one' },
	two: { path: 'two' },
	three: { path: 'three' },
}

const innerTabs = [
	{
		label: 'Inner One',
		path: 'one',
		props: { text: 'Placeholder for "Inner One" tab' }
	},
	{
		label: 'Inner Two',
		path: 'two',
		props: { text: 'Placeholder for "Inner Two" tab' }
	},
	{
		label: 'Inner Three',
		path: 'three',
		props: { text: 'Placeholder for "Inner Three" tab' }
	}
]

function InnerTabs() {
	return (
		<NavTabs
			tabs={innerTabs}
			defaultTab={0}
		>
			<Tabs indicatorColor="primary" />
			<Content />
		</NavTabs>
	)
}

const outerTabs = [
	{
		label: 'Outer One',
		path: paths.one.path,
		component: InnerTabs
	},
	{
		label: 'Outer Two',
		path: paths.two.path,
		component: InnerTabs
	},
	{
		label: 'Outer Three',
		path: paths.three.path,
		component: InnerTabs
	}
]


function App() {
	return (
		<NavTabs
			tabs={outerTabs}
			defaultTab={0}
		>
			<Tabs />
			<Content />
		</NavTabs>
	)
}

export default App
