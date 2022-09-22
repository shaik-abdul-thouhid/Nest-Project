import { Schema } from "mongoose";

export const BookMarkSchema = new Schema({
	createdAt: { type: String, required: true },
	updatedAt: { type: String, required: true },
	title: { type: String, required: true },
	description: { type: String, required: false },
	link: { type: String, required: true }
});

export interface BookMark {
	id: string,
	createdAt: string,
	updatedAt: string,
	title: string,
	description?: string,
	link: string
}