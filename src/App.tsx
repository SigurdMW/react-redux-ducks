import React from "react"
import { Provider } from "react-redux"
import { configureStore } from "./store"
import TodoListing from "./features/TodoListing"
import TodoForm from "./features/TodoForm"

// setup store with intial state
const store = configureStore({
	todos: {
		byId: {},
		isLoading: false
	}
})

export const App = () => {
	return (
		<Provider store={store}>
			<>
				<h1>Todo duck</h1>
				<TodoListing />
				<TodoForm />
			</>
		</Provider>
	)
}

export default App