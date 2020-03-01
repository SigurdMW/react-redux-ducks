import { IToDo } from "./ITodo"

export interface ITodoState {
	byId: {
		[key: string]: IToDo
	},
	isLoading: boolean
}