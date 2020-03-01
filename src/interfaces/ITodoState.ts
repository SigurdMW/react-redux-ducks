import { ITodo } from "./ITodo"

export interface ITodoState {
	byId: {
		[key: string]: ITodo
	},
	isLoading: boolean
}