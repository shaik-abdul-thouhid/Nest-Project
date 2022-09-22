import { Injectable } from "@nestjs/common";
import { User } from "./auth.model";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable({})
export class AuthService {
	constructor(@InjectModel('User') private readonly UserModel: Model<User>) {}

	login() {}

	async signup() {
		return { 
			id: (await new this.UserModel({ 
				id: 498, 
				createdAt: new Date().toISOString(), 
				updatedAt: '',
				name: 'test'
			})
			.save())['id'] 
		};
	}
	
}