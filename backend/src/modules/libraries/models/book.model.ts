import { ApiProperty } from '@nestjs/swagger'
import { Exclude } from 'class-transformer'
import { IsNumber, IsString, Min } from 'class-validator'
import { v4 as generateUUID } from 'uuid'

export class Book {
	@Exclude()
	readonly id: string

	@IsString()
	@ApiProperty({
		description: 'O nome do livro',
		example: 'O Cavaleiro Inexistente'
	})
	name: string

	@IsString()
	@ApiProperty({
		description: 'O nome do autor',
		example: 'Italo Calvino'
	})
	author: string

	@IsString()
	@ApiProperty({
		description: 'Categoria do livro',
		example: 'Romance'
	})
	category: string

	@IsNumber()
	@Min(0)
	@ApiProperty({
		description: 'Quantidade disponível do livro',
		example: 0
	})
	quantity: number

	@IsString()
	@ApiProperty({
		description: 'Editora do livro',
		example: 'Companhia de bolsa'
	})
	editor: string

	constructor(props: Omit<Book, 'id'>) {
		Object.assign(this, props)
		this.id = generateUUID()
	}
}
