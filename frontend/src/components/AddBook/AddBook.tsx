import { Autocomplete, Button, Grid, TextField } from '@material-ui/core'
import React from 'react'
import { useStoreon } from 'storeon/react'
import * as S from './AddBook.style'

interface IAddBookProps {}

export const AddBook = (props: IAddBookProps) => {
	const { dispatch, openDrawer: open, books } = useStoreon('books', 'openDrawer')
	return (
		<S.Container open={open} disablePortal>
			<Grid container justifyContent="space-between" flexGrow={1}>
				<Grid item>
					<Grid item container spacing={3}>
						<Grid item xs={12}>
							<TextField autoFocus label="Nome" />
						</Grid>
						<Grid item xs={12}>
							<TextField label="Autor" />
						</Grid>
						<Grid item xs={12}>
							<Autocomplete
								options={[...new Set(books.map(book => book.category))]}
								renderInput={inputProps => (
									<TextField {...inputProps} size="medium" label="Categoria" />
								)}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField type="number" label="Quantidade" />
						</Grid>
						<Grid item xs={12}>
							<TextField label="Editora" />
						</Grid>
					</Grid>
				</Grid>
				<Grid item container alignItems="flex-end">
					<Button fullWidth size="large" variant="contained">
						Criar
					</Button>
				</Grid>
			</Grid>
		</S.Container>
	)
}
