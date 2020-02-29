import { createAction, handleActions } from "redux-actions"
import { IBaseState, ITodoState } from "../interfaces"

const _ns = "@@todo/"
export const createNSAction = (action: string, payload?: any) => createAction(_ns+action, payload) as any
export const getState = (globalState: IBaseState): ITodoState => {
	return globalState.todos
}

export const setTodo = createNSAction("SET_TODO")

export const getTodos = (state: IBaseState) => {
	return state.todos
}

export const fetchTodos = () => async (dispatch: any, getGlobalState: () => IBaseState) => {
	// not implemented
}

export const reducer = handleActions({
	[setTodo.toString()]: (state: any, action: any) => ({
		...state,
		enrollingDeveloper: action.payload
	})
}, {})
export default reducer
