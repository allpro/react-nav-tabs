import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import NavTabs, { Tabs, Content } from '@allpro/react-nav-tabs'

const code = `
import React from 'react'

import NavTabs, { Tabs, Content } from '@allpro/react-nav-tabs'

const tabs = [
    {
        label: 'Tab One',
        path: 'one',
        props: { text: 'Placeholder for "Tab One"', code }
        // component: FirstTabContent
        // * Placeholder component will be used by default
    },
    {
        label: 'Tab Two',
        path: 'two',
        props: { text: 'Placeholder for "Tab Two"' }
        // component: SecondTabContent
        // * Placeholder component will be used by default
    },
    {
        label: 'Tab Three',
        path: 'three',
        props: { text: 'Placeholder for "Tab Three"' }
        // component: ThirdTabContent
        // * Placeholder component will be used by default
    }
]

function SimpleTabs() {
    return (
        <NavTabs tabs={tabs}>
            <Tabs />
            <Content />
        </NavTabs>
    )
}

export default SimpleTabs`

const tabs = [
	{
		label: 'Tab One',
		path: 'one',
		props: { text: 'Placeholder for "Tab One"', code }
		// component: FirstTabContent
		// * Placeholder component will be used by default
	},
	{
		label: 'Tab Two',
		path: 'two',
		props: { text: 'Placeholder for "Tab Two"' }
		// component: SecondTabContent
		// * Placeholder component will be used by default
	},
	{
		label: 'Tab Three',
		path: 'three',
		props: { text: 'Placeholder for "Tab Three"' }
		// component: ThirdTabContent
		// * Placeholder component will be used by default
	}
]

const isGitHubPages = /(github\.io|codesandbox\.io)/.test(window.location.hostname)

function SimpleTabs() {
	return (
		<Router basename={isGitHubPages ? '/react-nav-tabs' : ''}>
			<NavTabs tabs={tabs}>
				<Tabs />
				<Content />
			</NavTabs>
		</Router>
	)
}

export default SimpleTabs
