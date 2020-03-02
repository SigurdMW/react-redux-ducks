import React from "react"
import { Provider } from "react-redux"
import { storeManager } from "./store"
import Routes from "./routes"
import { BrowserRouter } from "react-router-dom"
import thunk from "redux-thunk"

// setup store with empty intial state
storeManager.createStore({})
storeManager.addMiddleware({
	thunk
}) 

export const App = () => {
	return (
		<Provider store={storeManager.store}>
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		</Provider>
	)
}

export default App