import { Module } from '@nestjs/common'
import { LibrariesController } from './libraries.controller'
import { LibrariesService } from './libraries.service'
import { BookRepository } from './repositories/book.repository'

@Module({
	controllers: [LibrariesController],
	providers: [LibrariesService, BookRepository]
})
export class LibrariesModule {}
