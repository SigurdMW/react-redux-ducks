import React, { FC } from "react"
import { ITodoListingProps } from "./ITodoListingProps"

export const TodoListing: FC<ITodoListingProps> = ({
	todos
}) => {
	return (
		<div>Todos</div>
	)
}

export default TodoListing