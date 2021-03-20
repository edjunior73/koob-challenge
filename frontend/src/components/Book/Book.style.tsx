import { Chip, Paper, Typography } from '@material-ui/core'
import styled, { css } from 'styled-components'

interface ContainerProps {
	noBooks: boolean
}

export const Container = styled(Paper).withConfig<ContainerProps>({
	shouldForwardProp: prop => !['noBooks'].includes(prop)
})`
	width: 220px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 280px;
	${props =>
		props.noBooks &&
		css`
			opacity: 0.7;
		`}
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
