import React, { useState } from 'react';
import style from './edit.module.scss';
import { editTodo } from '../../store/reducers/todoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ITodo } from '../../models/data';
import { useParams } from 'react-router-dom';

export default function EditTodo() {
	const { id } = useParams();

	const dispatch = useDispatch();

	const todo = useSelector((state: any) =>
		state?.todos.todos.find((todo: any) => todo?.id === id)
	);

	const editTask = (e: any) => {
		e.preventDefault();
		console.log(localStorage.getItem('masha'));
		dispatch(editTodo({ id, ...form }));
	};

	/**
	 * form data
	 */
	const [form, setForm] = useState<ITodo>({
		title: todo.title,
		description: todo.description,
		date: todo.date,
		file: todo.file,
		complete: todo.complete,
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
				<button className={style.form_add} onClick={e => editTask(e)}>
					Edit
				</button>
			</div>
		</form>
	);
}
