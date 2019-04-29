import React from 'react'
import PropTypes from 'prop-types'
import { withRouter, matchPath } from 'react-router-dom'
import bindAll from 'lodash/bindAll'
import startsWith from 'lodash/startsWith'


const isEmptyPath = path => !path || path === '/'

const Context = React.createContext({})


class Wrapper extends React.Component {
	constructor(props) {
		super(props)

		// Temporary property to hold paths while waiting until after render()
		this.redirectPath = ''

		// Bind methods that are part of Wrapper
		bindAll(this, [
			'getTabPath',
			'getTabsData',
			'getCurrentTabIndex'
		])
	}

	componentDidMount() {
		this.componentDidUpdate()
	}

	componentDidUpdate() {
		if (this.redirectPath) {
			this.props.history.replace(this.redirectPath)
			this.redirectPath = ''
		}
	}

	isRootPath(path) {
		return isEmptyPath(path) || path === this.props.rootPath
	}

	/**
	 * Helper to determine which tab should be active given the current page
	 * URL. Current URL may match an empty tab-path, or there may be
	 * child-paths. NavTabs does not care about child-paths when selecting the
	 * active tab; only the first-path-segment after the page that contains the
	 * tabs.
	 *
	 * @example 'parent/tab-one' IS SAME AS 'parent/tab-one/sub/paths/below/tab'
	 */
	getCurrentTabIndex() {
		const { props } = this
		const { tabs, defaultTab, location } = props

		// Loop in reverse because 1st tab is likely the default, and a root URL
		let idx = tabs.length
		while (--idx >= 0) {
			const tab = tabs[idx]
			const tabPath = this.getTabPath(tab.path)

			const match = matchPath(location.pathname, {
				path: this.getTabPath(tab.path),
				exact: !!tab.exact,
				strict: !!tab.strict
			})

			if (match) {
				console.log({
					[tab.path]: 'MATCH',
					tabPath,
					match: props.match,
					location: props.location
				})
			}

			if (match) return idx
		}

		// If we didn't find a matching tab-path, and a defaultTab is specified,
		// then change the path automatically to match the default
		if (defaultTab >= 0 && defaultTab < tabs.length) {
			this.redirectPath = this.getTabPath(tabs[defaultTab].path)
		}

		// If no match found above, return default-tab idx, or 0
		// NOTE that we may change location after render-cycle completes
		return defaultTab || false // false == no-selected-tab
	}

	/*
	getCurrentTabIndex() {
		const { props } = this
		const { tabs, location, defaultTab } = props
		const currentPath = location.pathname

		// Loop in reverse because 1st tab is likely the default, and a root URL
		let idx = tabs.length
		while (--idx >= 0) {
			const tab = tabs[idx]
			const tabPath = this.getTabPath(tab.path)

			// If tabPath is a root-path, then check only for EXACT match
			if (this.isRootPath(tab.path) && tabPath === currentPath) {
				return idx
			}
			else if (startsWith(currentPath, tabPath)) {
				// Otherwise check if path STARTS-WITH tab.path,
				//	because sub-paths are allowed.
				// NOTE that this means tab.paths must not conflict,
				//	eg: 'boo', 'boohoo'
				return idx
			}

			/!*
			const match = matchPath("/users/123", {
				path: "/users/:id",
				exact: tab.exact,
				strict: false
			})
			*!/
		}

		console.log({
			defaultTab,
			match: props.match,
			location: props.location
		})

		// If no match found above, return default-tab idx, or 0
		return defaultTab || 0
	}
	*/

	/**
	 * Helper to concat 2 path segments, to avoid a trailing slash if
	 * child-path is empty
	 *
	 * @param {string} tabPath			Path specified in Tab config
	 * @returns {string}    			Returns the concatenated path
	 */
	getTabPath(tabPath) {
		const { props } = this
		const { parentPath, rootPath, match } = props
		let path = '/'

		if (tabPath) {
			if (parentPath) {
				path = parentPath + '/' + tabPath
			}
			// NOTE: props.match can be Null
			else if (match && match.url) {
				path = match.url
				const segments = path.replace(/\/$/, '').split('/')
				// ASSUME we won't have duplicate path/subpath strings
				if (segments[segments.length-1] !== tabPath) {
					path += '/' + tabPath
				}
			}
			else {
				path += '/' + tabPath
			}
		}

		// Eliminate all multiple slashes ('//') inside path
		path = path.replace(/[/]{2,}/g, '/')

		// console.log({
		// 	tabPath,
		// 	path,
		// 	match,
		// 	parent
		// })

		// Always prefer "/" for the 'bare' rootPath
		return path === rootPath ? '/' : path
	}

	getTabsData() {
		return this.props.tabs || {}
	}

	render() {
		const { props, getTabsData, getTabPath, getCurrentTabIndex } = this

		return (
			<Context.Provider
				value={{ getTabsData, getTabPath, getCurrentTabIndex }}
			>
				{props.children}
			</Context.Provider>
		)
	}
}


const { arrayOf, boolean, component, number, object, string, shape } = PropTypes

Wrapper.propTypes = {
	defaultTab: number,
	tabs: arrayOf(
		shape({
			label: string,
			path: string,
			exact: boolean,
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
	defaultTab: 0,
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
