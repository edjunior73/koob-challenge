import { Grid } from '@material-ui/core'
import { AddBook } from 'components/AddBook'
import { AddCard } from 'components/AddCard'
import { Book } from 'components/Book'
import React, { useEffect } from 'react'
import { useStoreon } from 'storeon/react'
import * as S from './Home.style'

export interface HomeProps {}

const bookInput = {
	name: 'Brizas Noturnasaa',
	author: 'Edmar Junior',
	editor: 'Greg Teixeira',
	category: 'Brizas',
	quantity: 1010
}

export const Home = (props: HomeProps) => {
	const { dispatch, books, openDrawer } = useStoreon('books', 'openDrawer')
	// useEffect(() => {
	// 	setTimeout(() => {
	// 		dispatch('openDrawer/set', true)
	// 		// dispatch('books/create', bookInput)
	// 	}, 3000)
	// 	// eslint-disable-next-line
	// }, [])
	return (
		<>
			<S.Container drawerOpened={openDrawer}>
				<Grid container spacing={3}>
					{books.map(({ id, ...book }) => (
						<Grid item key={id}>
							<Book {...book} />
						</Grid>
					))}
					<Grid item>
						<AddCard onClick={() => dispatch('openDrawer/set', !openDrawer)} />
					</Grid>
				</Grid>
			</S.Container>
			<AddBook />
		</>
	)
}
