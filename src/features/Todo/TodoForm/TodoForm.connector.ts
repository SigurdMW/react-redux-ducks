import { TodoForm } from "./TodoForm"
import { connect } from "react-redux"
import * as todoDucks from "../todo.duck"
import { INewTodo } from "interfaces/INewTodo"

export default connect(null, (dispatch: any) => ({
	addTodo: (todo: INewTodo) => dispatch(todoDucks.addTodo(todo))
}))(TodoForm)