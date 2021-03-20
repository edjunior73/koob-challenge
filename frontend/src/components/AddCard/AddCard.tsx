import { Add } from '@material-ui/icons'
import React from 'react'
import * as S from './AddCard.style'

interface IAddCardProps {
	onClick(): void
}

export const AddCard = ({ onClick }: IAddCardProps) => (
	<S.Container onClick={onClick}>
		<Add fontSize="inherit" />
	</S.Container>
)
