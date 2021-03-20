import { Body, Controller, Get, Post } from '@nestjs/common'
import { LibrariesService } from './libraries.service'
import { Book } from './models/book.model'

@Controller('libraries')
export class LibrariesController {
	constructor(private readonly librariesService: LibrariesService) {}

	@Post()
	createBook(@Body() bookInput: Book): Book {
		return this.librariesService.createBook(bookInput)
	}

	@Get()
	getBooks(): Book[] {
		return this.librariesService.getBooks()
	}
}
