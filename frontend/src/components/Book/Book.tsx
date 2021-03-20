import { Typography } from '@material-ui/core'
import React from 'react'
import * as S from './Book.style'

interface IBookProps {
	name: string
	author: string
	category: string
	quantity: number
	editor: string
}

export const Book = ({ name, author, category, quantity, editor }: IBookProps) => (
	<S.Container>
		<S.Content>
			<Typography>{author}</Typography>
			<S.Category label={category} />
		</S.Content>
		<S.Title>{name}</S.Title>
		<S.Content>
			<Typography variant="h5" color="secondary">
				{editor}
			</Typography>
			<Typography variant="body2" color="secondary">
				{quantity ? `x${quantity}` : 'Não tem'}
			</Typography>
		</S.Content>
	</S.Container>
)
