import React, { useRef, useState } from 'react';
import { ITodo } from '../models/data';

export const CreateTodo = () => {
	/**
	 * for creating todo item and writing data to localStorage
	 * @returns {undefined}
	 */
	// const addTodo = (): void => {
	// 	if (!form.title) return;

	// 	// const task: ITodo = {
	// 	// 	id: Date.now(),
	// 	// 	title: form.title,
	// 	// 	date: form.data,
	// 	// 	docs: form.doc,
	// 	// 	complete: false,
	// 	// };

	// 	todos = [task, ...todos];

	// 	setTodos(todos);
	// 	setForm({ title: '' });

	// 	saveToLocalStorage<ITodo[]>('tasks', todos);
	// };

	/**
	 * form state
	 */
	const [form, setForm] = useState<{
		title: string;
	}>({ title: '' });

	/**
	 * todos state
	 */
	let [todos, setTodos] = useState<ITodo[]>([]);

	/**
	 * instance of HTMLInputElement
	 */
	const inputRef = useRef<HTMLInputElement>(null);

	/**
	 * for input event handling
	 * @param {React.ChangeEvent<HTMLInputElement>} {target}
	 */
	const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
		target,
	}: React.ChangeEvent<HTMLInputElement>): void => {
		setForm({ title: target.value });
	};

	// /**
	//  * for handle enter keyboard event on HTMLInputElement
	//  * @param {React.KeyboardEvent} {key}
	//  */
	// const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = ({
	// 	key,
	// }: React.KeyboardEvent): void => {
	// 	if (key === 'Enter') {
	// 		addTodo();
	// 	}
	// };

	return (
		<form className='form'>
			<input
				type='text'
				className='input'
				value={form.title}
				onChange={handleChange}
			/>
			<input
				type='text'
				className='input'
				//value={form.description}
				onChange={handleChange}
			/>
			<input
				type='date'
				className='input'
				//value={form.date}
				onChange={handleChange}
			/>
			<input
				type='file'
				className='input'
				//value={form.file}
				onChange={handleChange}
			/>
			<button className='add-btn'>
				<span>Add</span>
			</button>
		</form>
	);
};
