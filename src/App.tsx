import React, { FC } from "react"
import { Provider } from "react-redux"
import { configureStore } from "./store"
import TodoListing from "./features/TodoListing"

const store = configureStore({
	todos: {
		byId: {},
		isLoading: false
	}
})

export const App: FC<{}> = ({ children }) => {
	return (
		<Provider store={store}>
			<TodoListing />
		</Provider>
	)
}

export default App