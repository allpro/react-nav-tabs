import React from 'react'

import NavTabs, { Tabs, Content } from '@allpro/react-nav-tabs'

const code = `
import React from 'react'

import NavTabs, { Tabs, Content } from '@allpro/react-nav-tabs'

const innerTabs = [
    {
        label: 'Inner Uno',
        path: 'uno',
        props: { text: 'Placeholder for "Inner Uno" tab' }
        // Placeholder component will be used by default
    },
    {
        label: 'Inner Dos',
        path: 'dos',
        props: { text: 'Placeholder for "Inner Dos" tab' }
        // Placeholder component will be used by default
    },
    {
        label: 'Inner Tres',
        path: 'tres',
        props: { text: 'Placeholder for "Inner Tres" tab' }
        // Placeholder component will be used by default
    }
]

function InnerTabs() {
    return (
        <NavTabs
            tabs={innerTabs}
            depth={3}
        >
            <Tabs 
                indicatorColor="secondary" 
                textColor="secondary" 
            />
            <Content />
        </NavTabs>
    )
}


const middleTabs = [
    {
        label: 'Middle Un',
        path: 'un',
        component: InnerTabs
    },
    {
        label: 'Middle Deux',
        path: 'deux',
        component: InnerTabs
    },
    {
        label: 'Middle Trois',
        path: 'trois',
        component: InnerTabs
    }
]

function MiddleTabs() {
    return (
        <NavTabs
            tabs={middleTabs}
            depth={2}
        >
            <Tabs 
                indicatorColor="primary" 
                textColor="primary" 
            />
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

function NestedTabs() {
    return (
        <NavTabs
            tabs={outerTabs}
            depth={1}
        >
            <Tabs />
            <Content />
        </NavTabs>
    )
}

export default NestedTabs`


const innerTabs = [
	{
		label: 'Inner Uno',
		path: 'uno',
		props: { text: 'Placeholder for "Inner Uno" tab', code }
		// Placeholder component will be used by default
	},
	{
		label: 'Inner Dos',
		path: 'dos',
		props: { text: 'Placeholder for "Inner Dos" tab' }
		// Placeholder component will be used by default
	},
	{
		label: 'Inner Tres',
		path: 'tres',
		props: { text: 'Placeholder for "Inner Tres" tab' }
		// Placeholder component will be used by default
	}
]

function InnerTabs() {
	return (
		<NavTabs
			tabs={innerTabs}
			depth={3}
		>
			<Tabs
				indicatorColor="secondary"
				textColor="secondary"
			/>
			<Content />
		</NavTabs>
	)
}


const middleTabs = [
	{
		label: 'Middle Un',
		path: 'un',
		component: InnerTabs
	},
	{
		label: 'Middle Deux',
		path: 'deux',
		component: InnerTabs
	},
	{
		label: 'Middle Trois',
		path: 'trois',
		component: InnerTabs
	}
]

function MiddleTabs() {
	return (
		<NavTabs
			tabs={middleTabs}
			depth={2}
		>
			<Tabs
				indicatorColor="primary"
				textColor="primary"
			/>
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

function NestedTabs() {
	return (
		<NavTabs
			tabs={outerTabs}
			depth={1}
		>
			<Tabs />
			<Content />
		</NavTabs>
	)
}

export default NestedTabs
