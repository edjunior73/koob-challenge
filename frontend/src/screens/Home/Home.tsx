import { Grid } from '@material-ui/core'
import { Book } from 'components/Book'
import React, { useEffect } from 'react'
import { useStoreon } from 'storeon/react'

export interface HomeProps {}

const bookInput = {
	name: 'Brizas Noturnasaa',
	author: 'Edmar Junior',
	editor: 'Greg Teixeira',
	category: 'Brizas',
	quantity: 1010
}

export const Home = (props: HomeProps) => {
	const { dispatch, books } = useStoreon('books')
	useEffect(() => {
		setTimeout(() => {
			dispatch('books/create', bookInput)
		}, 3000)
		// eslint-disable-next-line
	}, [])
	return (
		<Grid container spacing={3}>
			{books.map(({ id, ...book }) => (
				<Grid item key={id}>
					<Book {...book} />
				</Grid>
			))}
		</Grid>
	)
}
