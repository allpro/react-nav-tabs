import React from 'react'
import PropTypes from 'prop-types'
import { withRouter, matchPath } from 'react-router-dom'

import bindAll from 'lodash/bindAll'
import cloneDeep from 'lodash/cloneDeep'
import isString from 'lodash/isString'
import isInteger from 'lodash/isInteger'


const reEndSlashes = /(^\/|\/$)/g
const pathToArray = p => p.replace(reEndSlashes, '').split('/')
const pathFromArray = p => '/' + p.join('/')

const reParamName = /^:(.+)/
const fillParams = (arr, params) => (
	arr.map(val => {
		const name = (val.match(reParamName) || [])[1]
		return name ? (params[name] || '') : val
	})
)

const isValidIndex = (idx, numTabs) => (
	isInteger(idx) && idx >= 0 && idx < numTabs
)

/**
 * Calculate the full/absolute path from a relative tab.path
 *
 * @param {string} tabPath      Tab.path as specified in config
 * @param {Object} props 		New props received by getDerivedStateFromProps
 * @returns {string}            Absolute path/URL
 */
function calcFullPath(tabPath, props) {
	let { depth, parentPath, rootPath, match, location } = props
	match = match || {}
	if (isString(depth)) depth = parseInt(depth, 10)
	let fullPath = ''

	if (parentPath) {
		// Parent-path MAY contain a parameter, eg: "/foo/:bar"
		if (match.params) {
			const arr = pathToArray(parentPath)
			fillParams(arr, match.params)
			fullPath = pathFromArray(arr)
		}
		else {
			fullPath = '/' + parentPath // Double-slashes will be fixed below
		}
		if (tabPath) fullPath += '/' + tabPath
	}
	else if (depth >= 0) {
		let arr = pathToArray(location.pathname)
		arr = arr.slice(0, depth)
		fullPath = pathFromArray(arr)
		if (tabPath) {
			fullPath += '/' + tabPath
		}
	}
	// NOTE: props.match can be Null
	else if (match.url) {
		fullPath = match.url
		const arr = pathToArray(fullPath)
		// ASSUME we won't have duplicate path/sub-path strings
		if (tabPath && tabPath !== arr[arr.length - 1]) {
			fullPath += '/' + tabPath
		}
	}
	else if (tabPath) {
		fullPath = '/' + tabPath
	}

	// Cleanup multiple slashes ('//') inside path
	fullPath = fullPath.replace(/[/]{2,}/g, '/')

	// Always prefer "/" for the 'bare' rootPath
	// noinspection JSIncompatibleTypesComparison
	return fullPath === rootPath ? '/' : fullPath
}


const Context = React.createContext({})


class Wrapper extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			tabs: [],
			selectedIndex: false
		}

		// Bind methods included in Context
		bindAll(this, [
			'getTabsData',
			'getSelectedTabIndex'
		])
	}

	static getDerivedStateFromProps(props) {
		const { tabs, location } = props
		const currentPath = location.pathname

		const newState = {
			tabs: cloneDeep(tabs),
			selectedIndex: false
		}

		// Loop in reverse because 1st tab is likely the default, and a root URL
		let idx = tabs.length
		while (--idx >= 0) {
			const tab = newState.tabs[idx]
			const { path, exact, strict } = tab

			tab.fullPath = calcFullPath(path, props)

			const match = matchPath(currentPath, {
				path: tab.fullPath,
				exact: !!exact,
				strict: !!strict
			})

			tab.selected = !!match

			if (tab.selected) {
				newState.selectedIndex = idx
			}

			if (match) {
				console.log({
					[path]: 'MATCH',
					fullPath: tab.fullPath,
					match: props.match,
					location: props.location
				})
			}
		}

		return newState
	}

	componentDidMount() {
		this.componentDidUpdate()
	}

	// noinspection JSCheckFunctionSignatures
	componentDidUpdate() {
		const { defaultTab, history } = this.props
		const { tabs, selectedIndex } = this.state

		// If we didn't find a matching tab-path, and a defaultTab is specified,
		// then change the path automatically to that of the default tab
		if (selectedIndex === false && isValidIndex(defaultTab, tabs.length)) {
			history.replace(tabs[defaultTab].fullPath)
		}
	}


	/**
	 * Tabs-data GETTER for Context
	 *
	 * @returns {Array}
	 */
	getTabsData() {
		return this.state.tabs
	}

	/**
	 * Tabs selected-index GETTER for Context
	 *
	 * @returns {(number|boolean)}
	 */
	getSelectedTabIndex() {
		return this.state.selectedIndex
	}

	render() {
		const { props, getTabsData, getSelectedTabIndex } = this

		return (
			<Context.Provider
				value={{ getTabsData, getSelectedTabIndex }}
			>
				{props.children}
			</Context.Provider>
		)
	}
}


const { arrayOf, bool, component, number, object, oneOfType, string, shape } = PropTypes

Wrapper.propTypes = {
	defaultTab: oneOfType([ number, bool ]),
	tabs: arrayOf(
		shape({
			label: string,
			path: string,
			exact: bool,
			component: component,
			props: object
		})
	),
	parentPath: string,
	rootPath: string,
	// withRouter props
	history: object,
	location: shape({
		pathname: string
	}),
	match: shape({
		url: string
	})
}

Wrapper.defaultProps = {
	defaultTab: false, // false means no-tab-selected
	tabs: [
		{
			label: 'One',
			path: ''
		},
		{
			label: 'Two',
			path: 'two'
		},
		{
			label: 'Three',
			path: 'three'
		}
	]
}

export default withRouter(Wrapper)
export { Context }
