import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import trashIcon from '../../assets/icons/trash.svg';
import viewing from '../../assets/icons/eye.svg';
import pencil from '../../assets/icons/pencil.svg';
import { addTodo } from '../../store/reducers/todoSlice';
import { IState, ITodoItem } from '../../models/data';
import style from './item.module.scss';
import { FileView } from '../FileView/FileView';
import { Link } from 'react-router-dom';
import { TodoView } from '../TodoView/TodoView';

export const TodoItem = (props: any) => {
	const todos = useSelector((state: IState) => state.todos);
	const [open, setOpen] = useState(false);
	const [openDescription, setOpenDescription] = useState(false);

	function handleOpen() {
		setOpen(!open);
	}
	function handleOpenDescription() {
		setOpenDescription(!openDescription);
	}

	return (
		<div className={style.todo}>
			<div className={style.todo_check}>
				<label htmlFor='checkbox'></label>
				<input
					className={style.todo_check_checkbox}
					type='checkbox'
					//checked={complete}
					//onChange={() => toggleComplete(id)}
				/>
				<p className={style.todo_check_date}>{props.date}</p>
			</div>
			<div className={style.todo_text}>
				<div className={style.todo_text_title}>
					<p>{props.title}</p>
				</div>
				<div className={style.todo_text_files} onClick={handleOpen}>
					Files: {props.file.length ? props.file.length : 0}
				</div>
				<span></span>
			</div>
			<div className={style.todo_btn}>
				<button onClick={handleOpenDescription}>Viewing</button>
				<Link to='/update'>
					<button>Edit</button>
				</Link>
			</div>
			{openDescription ? (
				<TodoView todos={todos} handleOpen={handleOpenDescription} />
			) : null}
			{open ? <FileView files={props.file} handleOpen={handleOpen} /> : null}
		</div>
	);
};
