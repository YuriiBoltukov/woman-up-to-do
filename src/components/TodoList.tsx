import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TodoItem } from './TodoItem/TodoItem';
import { ITodo } from '../models/data';
import { fetchToDos } from '../store/reducers/todoSlice';

const TodoList: React.FC = () => {
	const todos = useSelector((state: any) => state.todos);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchToDos());
	}, []);

	return (
		<div className='item-wrapper'>
			{todos?.todos?.map((todo: ITodo) => (
				<TodoItem key={todo.id} {...todo} />
			))}
		</div>
	);
};

export { TodoList };
