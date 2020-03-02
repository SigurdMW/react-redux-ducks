import React from "react"
import { TodoForm } from "./TodoForm"
import TodoListing from "./TodoListing"

export const Todo = () => (
	<div>
		<h1>Feature: todo</h1>
		<TodoListing />
		<TodoForm />
	</div>
)

export default Todo