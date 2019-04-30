import React, { Fragment } from 'react'

function Placeholder(props) {
	const wrapStyle = {
		border: '1px solid #CCC',
		background: '#FCFCFC',
		padding: '24px',
		minHeight: '300px'
	}

	const defaultText = 'I am a Placeholder'

	return (
		<div style={wrapStyle}>
			<h1>
				{props.text || defaultText}
			</h1>

			{props.code && (
				<Fragment>
					<hr />
					<pre><code>{props.code}</code></pre>
				</Fragment>
			)}
		</div>
	)
}

export default Placeholder
