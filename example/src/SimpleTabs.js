import React from 'react'

import NavTabs, { Tabs, Content } from '@allpro/react-nav-tabs'
// import NavTabs, { Tabs, Content } from 'react-nav-tabs'

const code = `
import React from 'react'

import NavTabs, { Tabs, Content } from '@allpro/react-nav-tabs'

const tabs = [
    {
        label: 'Tab One',
        path: 'one',
        props: { text: 'Placeholder for "Tab One"', code }
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
		props: { text: 'Placeholder for "Tab One"', code: code }
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
		<NavTabs tabs={tabs}>
			<Tabs />
			<Content />
		</NavTabs>
	)
}

export default SimpleTabs
