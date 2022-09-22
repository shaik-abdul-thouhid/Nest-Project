import { Schema } from "mongoose";

export const UserSchema = new Schema({
	createdAt: { type: String, required: true },
	updatedAt: { type: String, required: true },
	email: { type: String, required: true },
	hash: { type: String, required: true },
	firstName: { type: String, required: false },
	lastName: { type: String, required: false }
});

export interface User {
	id: string;
	createdAt: string;
	updatedAt: string;
	email: string;
	hash: string;
	firstName?: string;
	lastName?: string;
}
