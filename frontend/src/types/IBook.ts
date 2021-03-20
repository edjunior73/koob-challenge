export interface IBook {
	id: string
	name: string
	author: string
	category: string
	quantity: number
	editor: string
}

export type BookCreation = Omit<IBook, 'id'>
