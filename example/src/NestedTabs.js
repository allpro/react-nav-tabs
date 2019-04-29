import React from 'react'

import NavTabs, { Tabs, Content } from '@allpro/react-nav-tabs'
// import NavTabs, { Tabs, Content } from 'react-nav-tabs'

import { isGitHubPages } from './utils'

const innerTabs = [
	{
		label: 'Inner Uno',
		path: 'uno',
		props: { text: 'Placeholder for "Inner Uno" tab' }
	},
	{
		label: 'Inner Dos',
		path: 'dos',
		props: { text: 'Placeholder for "Inner Dos" tab' }
	},
	{
		label: 'Inner Tres',
		path: 'tres',
		props: { text: 'Placeholder for "Inner Tres" tab' }
	}
]

function InnerTabs() {
	return (
		<NavTabs
			tabs={innerTabs}
			depth={isGitHubPages() ? 4 : 3}
		>
			<Tabs indicatorColor="secondary" textColor="secondary" />
			<Content />
		</NavTabs>
	)
}


const middleTabs = [
	{
		label: 'Middle Un',
		path: 'un',
		props: { text: 'Placeholder for "Middle Un" tab' },
		component: InnerTabs
	},
	{
		label: 'Middle Deux',
		path: 'deux',
		props: { text: 'Placeholder for "Middle Deux" tab' },
		component: InnerTabs
	},
	{
		label: 'Middle Trois',
		path: 'trois',
		props: { text: 'Placeholder for "Middle Trois" tab' },
		component: InnerTabs
	}
]

function MiddleTabs() {
	return (
		<NavTabs
			tabs={middleTabs}
			defaultTab={0}
			depth={isGitHubPages() ? 3 : 2}
		>
			<Tabs indicatorColor="primary" textColor="primary" />
			<Content />
		</NavTabs>
	)
}


const outerTabs = [
	{
		label: 'Outer One',
		path: 'one',
		component: MiddleTabs
	},
	{
		label: 'Outer Two',
		path: 'two',
		component: MiddleTabs
	},
	{
		label: 'Outer Three',
		path: 'three',
		component: MiddleTabs
	}
]

function App() {
	return (
		<NavTabs
			tabs={outerTabs}
			defaultTab={0}
			depth={isGitHubPages() ? 2 : 1}
		>
			<Tabs />
			<Content />
		</NavTabs>
	)
}

export default App
