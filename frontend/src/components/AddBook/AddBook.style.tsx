import { Drawer } from '@material-ui/core'
import { DRAWER_WIDTH } from 'constants/config'
import styled from 'styled-components'

export const Container = styled(Drawer).attrs({
	anchor: 'right',
	PaperProps: {
		elevation: 8
	}
})`
	width: ${DRAWER_WIDTH}px;
	flex-shrink: 0;
	& .MuiDrawer-paper {
		padding: 20px;
		border-left: none;
		width: ${DRAWER_WIDTH}px;
	}
`
