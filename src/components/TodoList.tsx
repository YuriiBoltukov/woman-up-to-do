import React from 'react';
import { useSelector } from 'react-redux';
import { TodoItem } from './TodoItem/TodoItem';
import { IState, ITodo, ITodoList } from '../models/data';

const TodoList: React.FC = () => {
	const todos = useSelector((state: IState) => state.todos);
	return (
		<div className='item-wrapper'>
			{todos.map((todo: ITodo) => (
				<TodoItem key={todo.id} {...todo} />
			))}
		</div>
	);
};

export { TodoList };
