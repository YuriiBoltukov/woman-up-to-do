export interface ToDoInterface {
	id: string;
	title: string;
	description: string;
	date: string;
	doc: [];
}

export interface DescriptionProps extends ToDoInterface {
	setActive: () => void;
}
