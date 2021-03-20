import { DRAWER_WIDTH } from 'constants/config'
import styled, { css } from 'styled-components'

interface ContainerProps {
	drawerOpened: boolean
}

export const Container = styled.div.withConfig<ContainerProps>({
	shouldForwardProp: prop => !['drawerOpened'].includes(prop)
})`
	padding: 20px;
	transition: all 0.2s linear;
	${props =>
		props.drawerOpened &&
		css`
			margin-right: ${DRAWER_WIDTH}px;
		`}
`
