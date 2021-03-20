import { v4 as generateUUID } from 'uuid'

export class Book {
	readonly id: string
	name: string
	author: string
	category: string
	quantity: number
	editor: string

	constructor(props: Omit<Book, 'id'>) {
		Object.assign(this, props)
		this.id = generateUUID()
	}
}
