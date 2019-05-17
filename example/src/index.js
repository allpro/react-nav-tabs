import React from 'react'
import { render } from 'react-dom'

import DemoLayout from '@allpro/demo-layout'

import SimpleTabs from './SimpleTabs'
import NestedTabs from './NestedTabs'


function NavTabsDemo() {
	return (
		<DemoLayout
			packageName="react-nav-tabs"
			title="React NavTabs Examples"
			readme="https://github.com/allpro/react-nav-tabs/blob/master/README.md"
			demo="https://codesandbox.io/s/github/allpro/react-nav-tabs/tree/master/example"
			pages={[
				{
					label: 'Simple Tabs',
					path: '/simple-tabs',
					component: SimpleTabs
				},
				{
					label: 'Nested Tabs',
					path: '/nested-tabs',
					component: NestedTabs
				}
			]}
		/>
	)
}

render(<NavTabsDemo />, document.getElementById('root'))
