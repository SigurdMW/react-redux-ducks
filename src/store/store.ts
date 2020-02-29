import { IBaseState } from "../interfaces"
import { applyMiddleware, compose, createStore, Middleware } from "redux"
import thunk from "redux-thunk"
import { rootReducer } from "../ducks"

let composeEnhancer = compose
if (process.env.NODE_ENV === "development") {
	const anyWindow = window as any
	composeEnhancer = anyWindow.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

let env = process.env.NODE_ENV
if (!env || env.trim() === "") {
	env = "production"
}

export const configureStore = (initialState: IBaseState, additionalMiddleware: Middleware[] = []) => {
	return createStore(
		rootReducer(),
		initialState,
		composeEnhancer(
			applyMiddleware(...[
				thunk,
				...additionalMiddleware
			])
		)
	)
}
export default configureStore
