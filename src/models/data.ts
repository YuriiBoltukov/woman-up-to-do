export interface ITodo {
	id?: string;
	title?: string;
	description?: string;
	date?: string;
	file?: string[] | string;
	complete?: boolean;
}

export interface IState {
	todos: ITodo[];
}

export interface ITodoItem extends ITodo {
	toggleComplete: (id: number) => void;
	removeTodo: (id: number) => void;
	updateTodo: (id: number, title: string) => void;
}

export interface ITodoList {
	items: ITodo[];
	toggleComplete: (id: number) => void;
	removeTodo: (id: number) => void;
	updateTodo: (id: number, title: string) => void;
}

export interface DescriptionProps extends ITodo {
	setActive: () => void;
}
