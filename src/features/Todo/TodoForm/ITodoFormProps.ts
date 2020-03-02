import { INewTodo } from "interfaces/INewTodo"

export interface ITodoFormProps {
	addTodo: (todo: INewTodo) => void
}