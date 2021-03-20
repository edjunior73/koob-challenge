import { Injectable } from '@nestjs/common'

@Injectable()
export class LibrariesService {
	getHello() {
		return 'Hello, World!'
	}
}
