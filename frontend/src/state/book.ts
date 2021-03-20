import { IStoreonModule } from 'storeon'
import { BookCreation, IBook } from 'types/IBook'
import iziToast from 'izitoast'
import { axiosClient } from 'constants/axios'

export interface BookState {
	books: IBook[]
	loading: boolean
	openDrawer: boolean
	creatingBook: BookCreation
	creatingLoading: boolean
}

export interface BookEvents {
	'books/create': BookCreation | null
	'books/get': void
	'books/set': IBook[]
	'books/add': IBook
	'loading/set': boolean
	'openDrawer/set': boolean
	'creatingBook/update': Partial<BookCreation>
	'creatingBook/reset': void
	'creatingLoading/set': boolean
}

const defaultBookInput: BookCreation = {
	author: '',
	category: '',
	editor: '',
	name: '',
	quantity: 0
}

export const booksModule: IStoreonModule = store => {
	store.on('@init', () => {
		store.dispatch('books/get')
		return {
			books: [],
			loading: false,
			openDrawer: false,
			creatingBook: defaultBookInput,
			creatingLoading: false
		}
	})
	store.on('loading/set', (_state, loading) => ({
		loading
	}))
	store.on('openDrawer/set', (_state, openDrawer) => ({
		openDrawer
	}))
	store.on('creatingBook/update', (state, creatingBook) => ({
		creatingBook: {
			...(state.creatingBook || {}),
			...creatingBook
		}
	}))
	store.on('creatingBook/reset', () => ({
		creatingBook: defaultBookInput
	}))
	store.on('books/get', async () => {
		store.dispatch('loading/set', true)
		const res = await axiosClient.get<IBook[]>('libraries')
		store.dispatch('books/set', res.data || [])
	})
	store.on('books/set', (_state, books) => ({
		books
	}))
	store.on('books/add', (state, book) => ({
		books: [...state.books, book]
	}))
	store.on('books/create', async (_state, book) => {
		try {
			store.dispatch('creatingLoading/set', true)
			const res = await axiosClient.post<IBook>('libraries', book)
			if (res.data) {
				store.dispatch('books/add', res.data)
			}
		} catch (error) {
			if (error?.response?.data?.message?.length > 0) {
				error.response.data.message.forEach((msg: string) => {
					iziToast.error({
						title: 'Error',
						message: msg
					})
				})
			}
		} finally {
			store.dispatch('creatingLoading/set', false)
			store.dispatch('creatingBook/reset')
		}
	})
	store.on('creatingLoading/set', (_state, creatingLoading) => ({
		creatingLoading
	}))
}
