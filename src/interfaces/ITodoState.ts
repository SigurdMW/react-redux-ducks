export interface ITodoState {
	byId: {
		[key: string]: {
			done: boolean,
			text: string
		}
	}
}