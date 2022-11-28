import React from 'react';
import { useSelector } from 'react-redux';
import { TodoItem } from './TodoItem/TodoItem';
import { ITodo } from '../models/data';

const TodoList: React.FC = () => {
	const todos = useSelector((state: any) => state.todos);
	return (
		<div className='item-wrapper'>
			{todos?.todos?.map((todo: ITodo) => (
				<TodoItem key={todo.id} {...todo} />
			))}
		</div>
	);
};

export { TodoList };
