import React from 'react';
import { TodoList } from '../TodoList';
import { Link, Routes, Route } from 'react-router-dom';
import { CreateTodo } from '../CreateTodo/CreateTodo';
import { NotFoundPage } from '../NotFoundPage';
import style from './app.module.scss';
import EditTodo from '../EditTodo/EditTodo';

const App: React.FC = () => {
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
