import Home from "features/Home"
import React, { Suspense } from "react"
import { Link, BrowserRouter, Switch, Route } from "react-router-dom"
import { storeManager } from "../store"
import { lazyModules } from "./lazyModules"

// Here you add a reference to each chunked feature you want to route to.
const {
	Todo
} = lazyModules(storeManager)

export const Routes = () => (
	<div>
		<Link to="/">Home</Link>
		<Link to="/todos">Todos</Link>
		<Suspense fallback={<div>laster...</div>}>
			<Switch>
				<Route path="/" exact component={Home}/>
				<Route path="/todos" exact component={Todo}/>
			</Switch>
		</Suspense>
	</div>
)

export default Routes