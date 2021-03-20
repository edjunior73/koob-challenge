import { Controller, Get } from '@nestjs/common'
import { LibrariesService } from './libraries.service'

@Controller('libraries')
export class LibrariesController {
	constructor(private readonly librariesService: LibrariesService) {}

	@Get()
	getHello(): string {
		return this.librariesService.getHello()
	}
}
