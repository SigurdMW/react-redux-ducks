import React, { FC } from "react"
import { Provider } from 'react-redux'
import store from './store'

export const App: FC<{}> = ({ children }) => {
	return (
		<Provider store={store}>
			{children}
		</Provider>
	)
}

export default App