import React, { Fragment } from 'react'

// import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'


function Home() {
	return (
		<Fragment>
			<Typography variant="title" gutterBottom>
				Home
			</Typography>
			<Typography variant="subheading">
				Use the navigation at left to load demos.
				The first tab of each demo shows the code used for the demo.
			</Typography>
		</Fragment>
	)
}

export default Home
