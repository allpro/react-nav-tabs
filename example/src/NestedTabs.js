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
            depth={3}
            defaultTab={false}
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
            depth={2}
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
			defaultTab={false}
			depth={3}
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
			depth={2}
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
