import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { StylesWrapper } from 'styles'
import App from './App'

ReactDOM.render(
	<React.StrictMode>
		<StylesWrapper>
			<Router>
				<App />
			</Router>
		</StylesWrapper>
	</React.StrictMode>,
	document.getElementById('root')
)
