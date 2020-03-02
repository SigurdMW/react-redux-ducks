import { ITodo } from "interfaces/ITodo"

export interface ITodoListingProps {
	todos: ITodo[]
	fetchTodos: () => void
	isLoading: boolean
	toggleDone: (id: string) => void
}