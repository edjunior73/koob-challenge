import { IStoreonModule } from 'storeon'
import { IBook } from 'types/IBook'
import iziToast from 'izitoast'
import { axiosClient } from 'constants/axios'

export interface BookState {
	books: IBook[]
	loading: boolean
	openDrawer: boolean
}

export interface BookEvents {
	'books/create': Omit<IBook, 'id'>
	'books/get': void
	'books/set': IBook[]
	'books/add': IBook
	'loading/set': boolean
	'openDrawer/set': boolean
}

export const booksModule: IStoreonModule = store => {
	store.on('@init', () => {
		store.dispatch('books/get')
		return {
			books: [],
			loading: false,
			openDrawer: false
		}
	})
	store.on('loading/set', (_state, loading) => ({
		loading
	}))
	store.on('openDrawer/set', (_state, openDrawer) => ({
		openDrawer
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
		}
	})
}
