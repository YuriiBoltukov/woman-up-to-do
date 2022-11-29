/**
 * for describing todo as default
 */
export interface ITodo {
	title: string;
	description?: string | undefined;
	date?: string;
	file?: string[];
	complete: boolean;
}

/**
 * for describing todo from backend
 */
export interface ITodoRes extends ITodo {
	id: string | undefined;
}

/**
 * for describing todo state
 */
export interface ITodoState {
	todos: ITodoRes[];
}
