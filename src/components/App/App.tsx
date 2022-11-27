import React, { useState, useEffect, useRef } from 'react';
import { ITodo } from '../../models/data';
import { TodoList } from '../TodoList';
import { Link, Routes, Route, useParams } from 'react-router-dom';
import { CreateTodo } from '../CreateTodo/CreateTodo';
import { NotFoundPage } from '../NotFoundPage';
import style from './app.module.scss';
import EditTodo from '../EditTodo/EditTodo';

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
		<div className={style.container}>
			<header className={style.header}>
				<h1 className={style.header_title}>To Do List</h1>
				<nav>
					<ul className={style.header_nav}>
						<li className={style.header_nav_items}>
							<Link to={'/create'}>
								<button className={`${style.btn} ${style.btn_ripple}`}>
									Add To Do
								</button>
							</Link>
						</li>
						<li className={style.header_nav}>
							<Link to={'/'}>
								<button className={`${style.btn} ${style.btn_ripple}`}>
									To Do List
								</button>
							</Link>
						</li>
					</ul>
				</nav>
			</header>

			<section className={style.container}>
				<Routes>
					<Route path='/' element={<TodoList />} />
					<Route path='/create' element={<CreateTodo />} />
					<Route path='/update/:id' element={<EditTodo />} />
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</section>
		</div>
	);
};

export default App;
