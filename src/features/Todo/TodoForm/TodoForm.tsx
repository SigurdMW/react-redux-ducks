import React, { FC, useState, FormEvent } from "react"
import { ITodoFormProps } from "./ITodoFormProps"

export const TodoForm: FC<ITodoFormProps> = ({ addTodo }) => {
	const [text, setText] = useState("")
	const submit = (e: FormEvent) => {
		e.preventDefault()
		if (text) {
			addTodo({
				text,
				done: false
			})
			setText("")
		}
	}
	return (
		<form className="pure-form" onSubmit={submit}>
			<fieldset>
				<label htmlFor="add-todo">Add todo</label>
				<input
					type="text"
					id="add-todo"
					placeholder="Todo text"
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
			</fieldset>
		</form>
	)
}