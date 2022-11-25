import React, { useState } from 'react';

import trashIcon from '../assets/icons/trash.svg';
import viewing from '../assets/icons/eye.svg';
import { ITodoItem } from '../models/data';

export const TodoItem: React.FC = props => {
	/**
	 * for updating todo
	 * @param {string} value
	 */
	// const updateTask = (value: string): void => {
	// 	updateTodo(id, value);
	// };

	return (
		<div className='todo-item'>
			<div>
				<label htmlFor='checkbox'></label>
				<input
					className='checkbox'
					type='checkbox'
					//checked={complete}
					//onChange={() => toggleComplete(id)}
				/>
			</div>
			{/* <p className={complete ? 'title completed-task' : 'title'}>{title}</p> */}
			<div className='btn-wrapper'>
				<div>
					<button className='btn ripple'>
						<img className='viewing' src={viewing} alt='To edit' />
					</button>
				</div>

				<div className='edit-btn'></div>

				<button className='btn ripple'>
					<img src={trashIcon} alt='To trash' />
				</button>
			</div>
		</div>
	);
};
