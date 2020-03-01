import { IBaseState } from "interfaces/"
import { TodoListing } from "./TodoListing"
import { connect } from "react-redux"
import * as todoDucks from "ducks/todo.duck"

export default connect((state: IBaseState) => ({
	todos: todoDucks.getTodos(state)
}))(TodoListing)