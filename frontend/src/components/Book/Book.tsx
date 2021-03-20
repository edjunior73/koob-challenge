import { Typography } from '@material-ui/core'
import React from 'react'
import { IBook } from 'types/IBook'
import * as S from './Book.style'

interface IBookProps extends Omit<IBook, 'id'> {}

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
