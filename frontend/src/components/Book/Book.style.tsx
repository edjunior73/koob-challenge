import { Chip, Paper, Typography } from '@material-ui/core'
import styled from 'styled-components'

export const Container = styled(Paper).attrs({
	elevation: 7
})`
	width: 220px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 280px;
	border-radius: 10px;
	position: relative;
	background-color: #f0e8d4;
	padding: 20px;
`

export const Title = styled(Typography).attrs({
	variant: 'h3'
})`
	text-align: center;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	font-weight: 500;
`

export const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
`

export const Category = styled(Chip)`
	width: fit-content;
	align-self: flex-end;
`
