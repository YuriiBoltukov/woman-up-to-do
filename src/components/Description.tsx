import React, { useEffect, useRef, useState } from 'react';
import closeIcon from '../assets/icons/close.svg';
import { DescriptionProps } from '../models/data';

export const Description = (props: DescriptionProps) => {
	/**
	 * active state for modal window
	 */
	const { setActive } = props;

	/**
	 * form data
	 */
	const [form, setForm] = useState<{
		[key: string]: string | number;
	}>({
		//title: props.value,
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
		setForm({ title: target.value });
	};

	/**
	 * to set focus on input
	 */
	useEffect(() => {
		inputRef.current?.focus();
	}, []);

	return (
		<div className='modal' onClick={() => console.log(true)}>
			<div
				className='modal-content'
				onClick={(event: React.MouseEvent) => event.stopPropagation()}>
				<div className='modal-header'>
					<h3 className='modal-title'>Edit Task</h3>
					<button className='btn'>
						<img src={closeIcon} alt='To close' />
					</button>
				</div>
				<div className='modal-main'>
					<input
						className='modal-input'
						type='text'
						value={form.title}
						ref={inputRef}
						onChange={handleChange}
					/>
				</div>
				<div className='modal-footer'>
					<button
						className='modal-btn ripple'
						onClick={() => console.log(true)}>
						Close
					</button>
					<button
						className='modal-btn ripple'
						onClick={() => console.log(true)}>
						Confirm
					</button>
				</div>
			</div>
		</div>
	);
};
