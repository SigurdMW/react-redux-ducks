import { IToDo } from 'interfaces/ITodo';
import { delay } from "../utils/delay"
import { todos } from "../utils/data"
import { createAction, handleActions, Action } from "redux-actions"
import { IBaseState, ITodoState } from "../interfaces"
import { Dispatch } from "redux"

const _ns = "@@todo/"
export const createNSAction = (action: string, payload?: any) => createAction(_ns+action, payload) as any
export const getState = (globalState: IBaseState): ITodoState => {
	return globalState.todos
}

export const setTodos = createNSAction("SET_TODOS")
export const setIsLoading = createNSAction("SET_TODOS_LOADING")

export const getTodos = (globalState: IBaseState) => {
	return Object.entries(getState(globalState).byId).map(([key, value]) => value)
}

export const getTodo = (globalState: IBaseState, id: string) => {
	const state = getState(globalState)
	if (state.byId[id]) {
		return state.byId[id]
	}
	return null
}

export const fetchTodos = () => async (dispatch: Dispatch) => {
	dispatch(setIsLoading(true))
	await delay(1000)
	dispatch(setTodos(todos))
	dispatch(setIsLoading(false))
}

export const reducer = handleActions<any, any>({
	[setTodos.toString()]: (state: ITodoState, action: Action<{[key: string]: IToDo}>) => ({
		...state,
		byId: action.payload
	}),
	[setIsLoading.toString()]: (state: ITodoState, action: Action<boolean>) => ({
		...state,
		isLoading: action.payload
	})
}, {
	byId: {},
	isLoading: false
})
export default reducer
