import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/reducers/todoSlice';
import { Upload } from '../Upload/Upload';
import style from './create.module.scss';

export const CreateTodo = () => {
	const dispatch = useDispatch();
	const addTask = (form: any) => dispatch(addTodo(form));

	/**
	 * instance of HTMLInputElement
	 */
	const inputRef = useRef<HTMLFormElement>(null);

	/**
	 * form state
	 */
	const [form, setForm] = useState({
		title: '',
		description: '',
		date: '',
		file: '',
	});
	const handleSubmit = (e: any, form: any) => {
		e.preventDefault();
		validateForm();
		addTask(form);
		setForm({
			title: '',
			description: '',
			date: '',
			file: '',
		});
	};
	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement>,
		key: string
	) => {
		event.preventDefault();
		setForm({ ...form, [key]: event.target.value });
	};

	function validateForm() {
		const inputElements = Array.from(document.querySelectorAll('input'));
		inputElements.forEach(input => {
			if (!input.checkValidity())
				//@ts-ignore
				input.setAttribute('aria-invalid', !input.reportValidity());
		});
	}

	const handleFileUploader = (event: any) => {
		event.preventDefault();
		const file = event.target.files[0];
		let formData = new FormData();
		formData.append('file', file);
	};

	return (
		<form className={style.form} ref={inputRef}>
			<label>
				<p className={style.form_text}>Title</p>
				<input
					type='text'
					className={style.form_input}
					value={form.title}
					onChange={e => handleChange(e, 'title')}
					required
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
			<label>
				<input type='file' multiple onChange={e => handleFileUploader(e)} />
				<Upload />
			</label>
			<div className={style.form_wrapper}>
				<button className={style.form_add} onClick={e => handleSubmit(e, form)}>
					<span>Add</span>
				</button>
			</div>
		</form>
	);
};
