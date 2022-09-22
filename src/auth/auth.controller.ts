import { Controller, Post, Header, Get } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@Get()
	test() {
		return {
			hello: 'hello',
			world: 'world'
		};
	}

	@Post('login')
	@Header('X-Powered-By', 'Minitube')
	login() {
		return 'i am signup';
	}
	
	@Post('signup')
	@Header('X-Powered-By', 'Minitube')
	async signup() {
		return await this.authService.signup();
	}
}