import { Injectable } from '@nestjs/common'
import { Book } from '../models/book.model'

@Injectable()
export class BookRepository {
	private books: Book[] = []

	save(book: Book): void {
		this.books.push(book)
	}

	getAll(): Book[] {
		return this.books
	}
}
