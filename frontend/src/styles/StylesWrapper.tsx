import React from 'react'
import { ThemeProvider } from 'styled-components'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { materialTheme } from './materialTheme'
import { theme } from './theme'
import { GlobalStyles } from './global'

export const StylesWrapper: React.FC = ({ children }) => (
	<MuiThemeProvider theme={materialTheme}>
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			{children}
		</ThemeProvider>
	</MuiThemeProvider>
)

export default StylesWrapper
