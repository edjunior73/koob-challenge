import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'
import { PORT } from './constants/config'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	const options = new DocumentBuilder()
		.setTitle('Books example')
		.setVersion('1.0')
		.addTag('libraries')
		.build()
	const document = SwaggerModule.createDocument(app, options)
	SwaggerModule.setup('api', app, document)
	app.enableCors()
	app.useGlobalPipes(new ValidationPipe())
	await app.listen(PORT)
}
bootstrap()
