import { combineReducers } from "redux"
import { Reducer } from "redux-actions"

import { IBaseState } from "../interfaces"
import * as todos from "./todo.duck"

export interface IDuck {
	reducer: Reducer<any, any>,
	[k: string]: any
}

export const ducks = {
	todos
}

const anyDucks = ducks as any
const baseReducerState: {[key in keyof IBaseState]?: any} =
	Object.keys(ducks).reduce((acc, item) => {
		acc[item] = (anyDucks[item] as IDuck).reducer
		return acc
	}, {} as any)

export const rootReducer = () => combineReducers({
	...baseReducerState
})
