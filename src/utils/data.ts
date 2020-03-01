import { IToDo } from "../interfaces/ITodo"

export const todos: {[key: string]: IToDo} = {
	"1": {
		id: "1",
		done: false,
		text: "Presentere ducks"
	},
	"2": {
		id: "2",
		done: true,
		text: "Gjøre ferdig presentasjon"
	}
}