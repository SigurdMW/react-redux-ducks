import { Middleware, Reducer } from "redux"
import { ReduxCompatibleReducer } from "redux-actions"

/**
 * Defines the core functions of a duck file.
 */
export interface IDuck<TState = any, TAction = any> {
	/**
	 * The root reducer for this duck if applicable.
	 */
	reducer: Reducer | ReduxCompatibleReducer<TState, TAction>
	/**
	 * Add any additional middleware used by this module
	 */
	middleware?: {[key: string]: Middleware}
}