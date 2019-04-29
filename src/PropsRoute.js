/**
 * Helpers for React Router to simplify special handling.
 * Ideas taken from this discussion:
 * https://github.com/ReactTraining/react-router/issues/4105#issuecomment-291834881
 */

import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'


/**
 * Subroutine to create a React component with props
 *
 * @param {Object} component   The React component specified in Route
 * @param {Object} rest        The rest of the passed props
 */
const renderMergedProps = (component, ...rest) => {
	const finalProps = Object.assign({}, ...rest)
	return React.createElement(component, finalProps)
}


/**
 * Special route component that simplifies syntax for passing props
 * to the component specified in Route arguments.
 *
 * Special router props are destructured so are NOT included in 'rest',
 * and therefore not passed on to the route component - cleaner.
 *
 * @constructor
 * @param {Object} component        A React component
 * @param {string} path             All passed props other than component
 * @param {Object} computedMatch    All passed props other than component
 * @param {Object} [children]		Possible child-routes
 * @param {Object} rest             The rest of the passed props
 * @returns {Object}                Returns a React component WITH PROPS
 */
const PropsRoute = ({ component, path, computedMatch, ...rest }) => (
	<Route
		{...rest}
		render={routeProps => renderMergedProps(component, routeProps, rest)}
	/>
)

PropsRoute.propTypes = {
	component: PropTypes.func.isRequired
}

export default PropsRoute
