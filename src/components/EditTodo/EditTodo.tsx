import React, { useEffect, useRef, useState } from 'react';
import closeIcon from '../assets/icons/close.svg';

export default function EditTodo(props: any) {
	/**
	 * form data
	 */
	const [form, setForm] = useState({
		title: '',
		description: '',
		date: '',
		file: '',
	});

	/**
	 * instance of HTMLInputElement
	 */
	const inputRef: React.RefObject<HTMLInputElement> =
		useRef<HTMLInputElement>(null);

	/**
	 * to handle input changes
	 * @param {React.ChangeEvent<HTMLInputElement>} target
	 */
	const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
		target,
	}: React.ChangeEvent<HTMLInputElement>): void => {
		setForm({ ...form, title: target.value });
	};

	/**
	 * to set focus on input
	 */
	useEffect(() => {
		inputRef.current?.focus();
	}, []);

	return (
		<div className='edit_modal'>
			<div
				className='edit_modal-content'
				onClick={(event: React.MouseEvent) => event.stopPropagation()}>
				<div className='edit_modal-main'>
					<form>
						<label>
							<p className='edit_modal_main-title'>Title</p>
							<input
								className='edit_modal-input'
								type='text'
								value={form.title}
								ref={inputRef}
								onChange={handleChange}
							/>
						</label>
						<label>
							<p className='edit_modal_main-title'>Description</p>
							<input
								className='edit_modal-input'
								type='text'
								value={form.title}
								ref={inputRef}
								onChange={handleChange}
							/>
						</label>
						<label>
							<p className='edit_modal_main-title'>Completion date</p>
							<input
								className='edit_modal-input'
								type='date'
								value={form.title}
								ref={inputRef}
								onChange={handleChange}
							/>
						</label>
						<label>
							<p className='edit_modal_main-title'>Documents</p>
							<input
								className='edit_modal-input'
								type='file'
								value={form.title}
								ref={inputRef}
								onChange={handleChange}
							/>
						</label>
					</form>
				</div>
				<div className='edit_modal-footer'>
					<button className='edit_modal-btn ripple'>Close</button>
					<button
						className='edit_modal-btn ripple'
						onClick={() => props.updateTask(form.title)}>
						Confirm
					</button>
				</div>
			</div>
		</div>
	);
}
