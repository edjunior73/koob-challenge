export const theme = {
	text: '#3c4043',
	link: '#4a90e2',
	textSecondary: 'rgb(146, 146, 157)',
	primary: '#4285f4',
	border: '#e4e4e4',
	colors: {
		pink: 'rgb(192, 82, 242)',
		purple: 'rgb(105, 121, 248)',
		blue: 'rgb(0, 132, 244)',
		red: 'rgb(255, 100, 124)',
		green: 'rgb(0, 196, 140)',
		orange: 'rgb(255, 162, 107)',
		yellow: 'rgb(255, 185, 70)'
	},
	elevation7: '0 3px 14px rgba(0, 0, 0, 0.07)',
	elevation8: '0 7px 60px rgba(0, 0, 0, 0.12)',
	cancel: '#EEF0F2',
	disabled: '#eeeded',
	inputDisabledColor: '#c5c4c4'
}

export type Theme = typeof theme

declare module 'styled-components' {
	interface DefaultTheme extends Theme {}
}
