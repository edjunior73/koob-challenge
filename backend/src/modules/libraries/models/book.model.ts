import { Exclude } from 'class-transformer'
import { IsNumber, IsPositive, IsString } from 'class-validator'
import { v4 as generateUUID } from 'uuid'

export class Book {
	@Exclude()
	readonly id: string

	@IsString()
	name: string

	@IsString()
	author: string

	@IsString()
	category: string

	@IsNumber()
	@IsPositive()
	quantity: number

	@IsString()
	editor: string

	constructor(props: Omit<Book, 'id'>) {
		Object.assign(this, props)
		this.id = generateUUID()
	}
}
