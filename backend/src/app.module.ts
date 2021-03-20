import { Module } from '@nestjs/common'
import { LibrariesModule } from './modules/libraries/libraries.module'

@Module({
	imports: [LibrariesModule]
})
export class AppModule {}
