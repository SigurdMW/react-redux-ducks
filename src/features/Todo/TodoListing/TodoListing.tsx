import React, { FC, useEffect } from "react"
import { ITodoListingProps } from "./ITodoListingProps"

export const TodoListing: FC<ITodoListingProps> = ({
	todos = [],
	fetchTodos,
	isLoading,
	toggleDone
}) => {
	useEffect(() => {
		fetchTodos()
	}, [])
	if (isLoading) return <div>Laster gjøremål</div>
	return (
		<ul>
			{todos.map(t => (
				<li key={t.id}>{t.text}
					<input type="checkbox" checked={t.done} onChange={(e) => { toggleDone(t.id)}} />
				</li>
			))}
		</ul>
	)
}

export default TodoListing