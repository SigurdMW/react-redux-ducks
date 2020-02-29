import React, { FC } from "react"
import { Provider } from "react-redux"
import { configureStore } from "./store"

const store = configureStore({
	todos: {
		byId: {}
	}
})

export const App: FC<{}> = ({ children }) => {
	return (
		<Provider store={store}>
			<div>Test</div>
		</Provider>
	)
}

export default App