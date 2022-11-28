import React, { useState } from 'react';
import style from './edit.module.scss';
import { addTodo } from '../../store/reducers/todoSlice';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

export default function EditTodo(props: any) {
	const dispatch = useDispatch();
	const addTask = () => dispatch(addTodo({}));
	const location = useLocation();
	const { todo } = location.state;
	/**
	 * form data
	 */
	const [form, setForm] = useState({
		title: todo.title,
		description: todo.description,
		date: todo.date,
		file: todo.file,
	});

	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement>,
		key: string
	) => {
		event.preventDefault();
		setForm({ ...form, [key]: event.target.value });
	};

	return (
		<form className={style.form}>
			<label>
				<p className={style.form_text}>Title</p>
				<input
					type='text'
					className={style.form_input}
					value={form.title}
					onChange={e => handleChange(e, 'title')}
				/>
			</label>
			<label>
				<p className={style.form_text}>Description</p>
				<input
					type='text'
					id='title'
					className={style.form_input}
					value={form.description}
					onChange={e => handleChange(e, 'description')}
				/>
			</label>
			<label>
				<p className={style.form_text}>Date</p>
				<input
					type='date'
					className={style.form_input}
					value={form.date}
					onChange={e => handleChange(e, 'date')}
				/>
			</label>
			<label></label>
			<div className={style.form_wrapper}>
				<button className={style.form_add} onClick={addTask}>
					Edit
				</button>
			</div>
		</form>
	);
}
