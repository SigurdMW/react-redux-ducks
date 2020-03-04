import { delay } from "utils/delay"
import { todos } from "utils/data"
import { createAction, handleActions, Action } from "redux-actions"
import { Dispatch } from "redux"
import { ITodo, INewTodo, IBaseState, ITodoState, IDuckExport } from "interfaces/"

const _ns = "@@todo/"
export const createNSAction = (action: string, payload?: any) => createAction(_ns+action, payload) as any
export const getState = (globalState: IBaseState): ITodoState => {
	return globalState.todos || {}
}

// Setters
export const setTodo = createNSAction("SET_TODO")
export const setTodos = createNSAction("SET_TODOS")
export const setIsLoading = createNSAction("SET_IS_LOADING")
export const setDone = createNSAction("SET_DONE")

// Getters
export const getTodos = (globalState: IBaseState) => {
	const state = getState(globalState).byId
	if (!state || !Object.keys(state).length) return []
	return Object.entries(state).map(([key, value]) => value)
}
export const getIsLoading = (globalState: IBaseState) => !!getState(globalState).isLoading
export const getTodo = (globalState: IBaseState, id: string) => {
	const state = getState(globalState)
	if (state.byId && state.byId[id]) {
		return state.byId[id]
	}
	return null
}

// Dispatch
export const fetchTodos = () => async (dispatch: Dispatch, getGlobalState: () => IBaseState) => {
	const state = getState(getGlobalState())
	if(Object.keys(state.byId || {}).length) return
	dispatch(setIsLoading(true))
	await delay(1000)
	dispatch(setTodos(todos))
	dispatch(setIsLoading(false))
}
export const addTodo = (todo: INewTodo) => async (dispatch: Dispatch) => {
	await delay(100)
	dispatch(setTodo(todo))
}
export const toggleDone = (id: string) => async (dispatch: Dispatch, getGlobalState: () => IBaseState) => {
	const state = getState(getGlobalState())
	dispatch(setDone({id, done: !state.byId[id].done}))
}

// Reducer
export const reducer = handleActions<any, any>({
	[setTodos.toString()]: (state: ITodoState, action: Action<{[key: string]: ITodo}>) => ({
		...state,
		byId: action.payload
	}),
	[setIsLoading.toString()]: (state: ITodoState, action: Action<boolean>) => ({
		...state,
		isLoading: action.payload
	}),
	[setTodo.toString()]: (state: ITodoState, actions: Action<INewTodo>) => {
		const id = Date.now().toString()
		return {
			...state,
			byId: {
				...state.byId,
				[id]: {
					id,
					...actions.payload
				}
			}
		}
	},
	[setDone.toString()]: (state: ITodoState, action: Action<{done: boolean, id: string}>) => {
		const { id, done } = action.payload
		return {
			...state,
			byId: {
				...state.byId, [id]: {
					...state.byId[id],
					done
				}
			}
		}
	}
}, {
	byId: {},
	isLoading: false
})

export const duck: IDuckExport = {
	["todos"]: {
		reducer
	}
}


export default reducer
