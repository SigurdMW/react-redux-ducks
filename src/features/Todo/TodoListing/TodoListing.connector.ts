import { IBaseState } from "interfaces/"
import { TodoListing } from "./TodoListing"
import { connect } from "react-redux"
import * as todoDucks from "../todo.duck"

const mapStateToProps = (state: IBaseState) => ({
	todos: todoDucks.getTodos(state),
	isLoading: todoDucks.getIsLoading(state)
})

const mapDispatchToProps = (dispatch: any) => ({
	fetchTodos: () => dispatch(todoDucks.fetchTodos()),
	toggleDone: (id: string) => dispatch(todoDucks.toggleDone(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoListing)