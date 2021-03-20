import React from 'react'
import { Grid } from '@material-ui/core'
import { AddBook } from 'components/AddBook'
import { AddCard } from 'components/AddCard'
import { Book } from 'components/Book'
import { useStoreon } from 'storeon/react'
import * as S from './Home.style'

export interface HomeProps {}

export const Home = (props: HomeProps) => {
	const { dispatch, books, openDrawer } = useStoreon('books', 'openDrawer')
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
