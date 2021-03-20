import { css, DefaultTheme } from 'styled-components'
import { alpha } from '@material-ui/core/styles'

export type Colors = keyof DefaultTheme['colors'] | 'primary'

export const notFromColors: Colors[] = ['primary']

export const allColors: Colors[] = [
	'blue',
	'green',
	'orange',
	'pink',
	'primary',
	'purple',
	'red',
	'yellow'
]

export const DEFAULT_COLOR: Colors = 'blue'

export const getColor = (color: Colors, theme: DefaultTheme): string => {
	const index = notFromColors.indexOf(color)
	if (index !== -1) {
		switch (color) {
			case 'primary':
				return theme.primary
		}
	}
	return theme.colors[color as Exclude<Colors, 'primary'>]
}

export const createModernColor = (color: Colors) => css`
	${({ theme }) => {
		const pickedColor = getColor(color, theme)
		return css`
			color: ${pickedColor} !important;
			background-color: ${alpha(pickedColor, 0.2)} !important;
		`
	}}
`
