import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { networkInterfaces } from "os";

(async function () {
	const app = await NestFactory.create(AppModule, { cors: true });
	await app.listen(3333, () => {
		const ip = networkInterfaces();
		console.log(`\nServer Started at: http://${ip['WiFi'] ? (ip['WiFi'][ip['WiFi'].length - 1]['address']) : 'localhost'}:3333/`);
	});
})();
