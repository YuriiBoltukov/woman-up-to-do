import React, { useState } from 'react';
import style from './edit.module.scss';
import { editTodo } from '../../store/reducers/todoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ITodo } from '../../models/data';
import { useParams } from 'react-router-dom';

export default function EditTodo() {
	/**
	 * for getting id from params
	 */
	const { id } = useParams();
	const [file, setFile] = useState('');

	const dispatch = useDispatch();

	const todo = useSelector((state: any) =>
		state?.todos.todos.find((todo: any) => todo?.id === id)
	);
	/**
	 *	for editing todo
	 * @param {React.SyntheticEvent} e
	 */
	const editTask = (e: React.SyntheticEvent) => {
		e.preventDefault();
		dispatch(editTodo({ id, ...form }));
		window.history.back();
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

	/**
	 *	for setting todos to local state
	 * @param {React.ChangeEvent<HTMLInputElement>} event
	 * @param {string} key
	 */
	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement>,
		key: string
	) => {
		event.preventDefault();
		setForm({ ...form, [key]: event.target.value });
	};

	/**
	 * for setting todos files to local state
	 * @param {React.ChangeEvent<HTMLInputElement>} e
	 * @param {string} key
	 */
	function handleFileChange(e: any, key: string) {
		e.preventDefault();
		setFile(e.target.value.split('\\')[2]);
		if (form.file) form.file.push(file);
		setForm({ ...form, [key]: form.file });
	}
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
			<label className={style.custom_file__label} htmlFor='field-upload'>
				<input
					type='file'
					className={style.custom_file__input}
					id='field-upload'
					name='upload'
					multiple
					onChange={e => handleFileChange(e, 'file')}
				/>
				<p>{file}</p>
			</label>
			<div className={style.form_wrapper}>
				<button className={style.form_add} onClick={e => editTask(e)}>
					Edit
				</button>
			</div>
		</form>
	);
}
