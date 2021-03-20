import { Exclude } from 'class-transformer'
import { IsNumber, IsPositive, IsString, MaxLength } from 'class-validator'
import { v4 as generateUUID } from 'uuid'

export class Book {
	@Exclude()
	readonly id: string

	@IsString()
	@MaxLength(30)
	name: string

	@IsString()
	@MaxLength(30)
	author: string

	@IsString()
	@MaxLength(15)
	category: string

	@IsNumber()
	@IsPositive()
	quantity: number

	@IsString()
	@MaxLength(15)
	editor: string

	constructor(props: Omit<Book, 'id'>) {
		Object.assign(this, props)
		this.id = generateUUID()
	}
}
