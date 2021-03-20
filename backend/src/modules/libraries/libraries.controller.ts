import { Body, Controller, Get, Post } from '@nestjs/common'
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { LibrariesService } from './libraries.service'
import { Book } from './models/book.model'

@ApiTags('libraries')
@Controller('libraries')
export class LibrariesController {
	constructor(private readonly librariesService: LibrariesService) {}

	@Post()
	@ApiOperation({ summary: 'Criar livro' })
	@ApiResponse({
		status: 200,
		type: Book
	})
	createBook(@Body() bookInput: Book): Book {
		return this.librariesService.createBook(bookInput)
	}

	@Get()
	@ApiOperation({ summary: 'Pegar livros' })
	@ApiResponse({
		status: 200,
		type: [Book]
	})
	getBooks(): Book[] {
		return this.librariesService.getBooks()
	}
}
