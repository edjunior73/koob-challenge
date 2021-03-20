import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { StoreContext } from 'storeon/react'
import 'izitoast/dist/css/iziToast.min.css'
import { StylesWrapper } from 'styles'
import store from 'state/store'
import './constants/axios'
import App from './App'

ReactDOM.render(
	<React.StrictMode>
		<StoreContext.Provider value={store}>
			<StylesWrapper>
				<Router>
					<App />
				</Router>
			</StylesWrapper>
		</StoreContext.Provider>
	</React.StrictMode>,
	document.getElementById('root')
)
