import styled from 'styled-components'
import { ButtonBase } from '@material-ui/core'

export const Container = styled(ButtonBase)`
	background-color: transparent;
	width: 220px;
	height: 280px;
	border: 1px dashed ${({ theme }) => theme.primary};
	font-size: 60px;
	color: ${({ theme }) => theme.primary};
	border-radius: 10px;
`
