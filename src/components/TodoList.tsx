import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { TodoItem } from './TodoItem/TodoItem';
import { ITodoRes } from '../models/data';

const TodoList: React.FC = () => {
	const todos = useSelector((state: any) => state.todos);

	useEffect(() => {}, []);

	return (
		<div className='item-wrapper'>
			{todos?.todos?.map((todo: ITodoRes) => (
				<TodoItem key={todo.id} {...todo} />
			))}
		</div>
	);
};

export { TodoList };
