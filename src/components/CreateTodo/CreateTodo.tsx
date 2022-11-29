import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { ITodo } from '../../models/data';
import { addTodo } from '../../store/reducers/todoSlice';
import style from './create.module.scss';

export const CreateTodo = () => {
	const dispatch = useDispatch();
	const addTask = (form: ITodo) => dispatch(addTodo(form));

	/**
	 * instance of HTMLInputElement
	 */
	const inputRef = useRef<HTMLFormElement>(null);

	const [file, setFile] = useState('');

	/**
	 * form state
	 */
	const [form, setForm] = useState<ITodo>({
		title: '',
		description: '',
		date: '',
		file: [],
		complete: false,
	});

	/**
	 * for submiting from form to state
	 * @param {React.FormEvent} e
	 * @param {ITodo} form
	 */
	const handleSubmit = (e: React.FormEvent, form: ITodo) => {
		e.preventDefault();
		validateForm();
		addTask(form);
		setForm({
			title: '',
			description: '',
			date: '',
			file: [],
			complete: false,
		});
		window.history.back();
	};

	/**
	 * for binding html input element with form state
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

	function handleFileChange(e: any, key: string) {
		e.preventDefault();
		setFile(e.target.value.split('\\')[2]);
		if (form.file) form.file.push(file);
		setForm({ ...form, [key]: form.file });
	}

	/**
	 * for validating form
	 */
	function validateForm() {
		const inputElements = Array.from(document.querySelectorAll('input'));
		inputElements.forEach(input => {
			if (!input.checkValidity())
				//@ts-ignore
				input.setAttribute('aria-invalid', !input.reportValidity());
		});
	}

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
				<button className={style.form_add} onClick={e => handleSubmit(e, form)}>
					<span>Add</span>
				</button>
			</div>
		</form>
	);
};
