import { Autocomplete, Button, Grid, TextField } from '@material-ui/core'
import LoadingButton from '@material-ui/lab/LoadingButton'
import React from 'react'
import { useStoreon } from 'storeon/react'
import { BookCreation } from 'types/IBook'
import * as S from './AddBook.style'

interface IAddBookProps {}

export const AddBook = (props: IAddBookProps) => {
	const { dispatch, openDrawer: open, books, creatingBook, creatingLoading } = useStoreon(
		'books',
		'openDrawer',
		'creatingBook',
		'creatingLoading'
	)
	const onSubmit = () => {
		dispatch('books/create', {
			...creatingBook,
			quantity: Number(creatingBook.quantity)
		})
	}
	const onChange = (key: keyof BookCreation, value: string | null) => {
		dispatch('creatingBook/update', {
			[key]: value
		})
	}
	const handleChange = (key: keyof BookCreation) => (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		onChange(key, e.target.value)
	}
	return (
		<S.Container
			open={open}
			disablePortal
			onClose={() => {
				dispatch('openDrawer/set', false)
			}}
		>
			<Grid container justifyContent="space-between" flexGrow={1}>
				<Grid item>
					<Grid item container spacing={3}>
						<Grid item xs={12}>
							<TextField
								onChange={handleChange('name')}
								value={creatingBook.name}
								autoFocus
								label="Nome"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								onChange={handleChange('author')}
								value={creatingBook.author}
								label="Autor"
							/>
						</Grid>
						<Grid item xs={12}>
							<Autocomplete
								freeSolo
								options={[...new Set(books.map(book => book.category))]}
								value={creatingBook.category === '' ? null : creatingBook.category}
								onChange={(_e, value) => onChange('category', value)}
								renderInput={inputProps => (
									<TextField
										{...inputProps}
										size="medium"
										label="Categoria"
										onBlur={e => {
											if (creatingBook.category !== e.target.value && e.target.value)
												onChange('category', e.target.value)
										}}
									/>
								)}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								onChange={handleChange('quantity')}
								value={creatingBook.quantity}
								type="number"
								label="Quantidade"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								value={creatingBook.editor}
								onChange={handleChange('editor')}
								label="Editora"
							/>
						</Grid>
					</Grid>
				</Grid>
				<Grid item container alignItems="flex-end">
					<LoadingButton
						fullWidth
						size="large"
						variant="contained"
						pending={creatingLoading}
						onClick={onSubmit}
					>
						Criar
					</LoadingButton>
				</Grid>
			</Grid>
		</S.Container>
	)
}
