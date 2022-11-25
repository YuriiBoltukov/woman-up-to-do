import React, { useState, useEffect, useRef } from 'react';
import { ITodo } from '../models/data';
import { TodoList } from './TodoList';
import { Link, Routes, Route } from 'react-router-dom';
import { CreateTodo } from './CreateTodo';
import { NotFoundPage } from './NotFoundPage';
import pencilIcon from '../assets/icons/pencil.svg';
//import EditTodo from './EditToDo';

const App: React.FC = () => {
	// /**
	//  * for saving data to localStorage
	//  * @param {string} key
	//  * @param {T} value
	//  * @returns {undefined | Error}
	//  */
	// const saveToLocalStorage = <T,>(key: string, value: T): void => {
	// 	if (!value) throw Error('Value should be defined');

	// 	const stringValue =
	// 		typeof value === 'string' ? value : JSON.stringify(todos);

	// 	localStorage.setItem(key, stringValue);
	// };

	/**
	 * for updating todo and writing data to local storage
	 * @param {number} id
	 * @param {string} title
	 */
	// const updateTodo = (id: number, title: string): void => {
	// 	todos.forEach((todo: ITodo) => {
	// 		if (todo.id === id) {
	// 			todo.title = title;
	// 		}
	// 	});

	// 	setTodos([...todos]);

	// 	saveToLocalStorage<ITodo[]>('tasks', todos);
	// };

	/**
	 * to check for data in local storage and if there is data, write it to the todos array
	 */
	// useEffect((): void => {
	// 	if ('tasks' in localStorage) {
	// 		todos = JSON.parse(localStorage.getItem('tasks') || '[]');

	// 		setTodos(todos);
	// 	}
	// }, []);

	/**
	 * to set focus to input after every todos change
	 */
	// useEffect((): void => {
	// 	inputRef.current?.focus();
	// }, [todos]);

	return (
		<div className='container'>
			<header className='header'>
				<h1 className='header-title'>To Do List</h1>
				<nav>
					<ul>
						<li>
							<Link to={'/create'}>
								<button>Add To Do</button>
							</Link>
						</li>
						<li>
							<Link to={'/edit'}>
								<button className='btn ripple'>
									<img className='edit' src={pencilIcon} alt='To edit' />
									<p>Edit</p>
								</button>
							</Link>
						</li>
						<li>
							<Link to={''}></Link>
						</li>
					</ul>
				</nav>
			</header>

			<section className='section'>
				<Routes>
					<Route path='/' element={<TodoList />} />
					<Route path='/create' element={<CreateTodo />} />
					{/* <Route path='/update' element={<EditTodo />} /> */}
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</section>
		</div>
	);
};

export default App;
