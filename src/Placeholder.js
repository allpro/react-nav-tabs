import React from 'react'

function Placeholder(props) {
	const wrapStyle = {
		border: '1px solid #CCC',
		background: '#FCFCFC',
		padding: '24px',
		minHeight: '300px'
	}

	const defaultText = 'I am a Placeholder'

	return (
		<h1 style={wrapStyle}>
			{props.text || defaultText}
		</h1>
	)
}

export default Placeholder
