import { Injectable } from '@nestjs/common'
import { Book } from './models/book.model'
import { BookRepository } from './repositories/book.repository'

@Injectable()
export class LibrariesService {
	constructor(private readonly bookRepo: BookRepository) {}

	createBook(bookInput: Omit<Book, 'id'>): Book {
		const book = new Book(bookInput)
		this.bookRepo.save(book)
		return book
	}
}
