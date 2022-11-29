import React from 'react';
import { useSelector } from 'react-redux';
import { TodoItem } from './TodoItem/TodoItem';
import { ITodoRes, ITodoState } from '../models/data';

const TodoList: React.FC = () => {
	/**
	 * for getting todos selector from state
	 */
	const { todos }: ITodoState = useSelector(
		(state: { todos: ITodoState }) => state.todos
	);

	return (
		<div className='item-wrapper'>
			{todos?.map((todo: ITodoRes) => (
				<TodoItem key={todo.id} {...todo} />
			))}
		</div>
	);
};

export { TodoList };
