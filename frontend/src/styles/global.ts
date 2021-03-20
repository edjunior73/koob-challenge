import { createGlobalStyle } from 'styled-components'

export const pxToRem = (px: number): string => `${px / 16}rem`

export const GlobalStyles = createGlobalStyle`
	html {
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	*, *::before, *::after {
		box-sizing: border-box;
	}
	* {
		margin: 0;
		padding: 0;
	}
	strong, b {
		font-weight: 500;
	}
	body {
		color: ${props => props.theme.text};
		font-size: 0.875rem;
	 	font-family: "Roboto", "Helvetica", "Arial", sans-serif;
		font-weight: 400;
		line-height: 1.43;
	}
	button {
		font-family: "Roboto", "Helvetica", "Arial", sans-serif;
	}
	@media print {
		body {
			background-color: #fff;
		}
	}
	body::backdrop {
		background-color: #fafafa;
	}
	a {
		font-size: inherit;
		text-decoration: none;
		color: ${props => props.theme.link};
	}
	.popover-transition {
		transition: all 281ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 187ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important;
	}
`
