import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodoComplete } from '../../store/reducers/todoSlice';
import style from './item.module.scss';
import { FileView } from '../FileView/FileView';
import { Link } from 'react-router-dom';
import { TodoView } from '../TodoView/TodoView';
import { attach } from '../../assets/icons/icons';

export const TodoItem = (props: any) => {
	const dispatch = useDispatch();

	const [open, setOpen] = useState(false);
	const [openDescription, setOpenDescription] = useState(false);
	const data = props;

	function handleOpen() {
		setOpen(!open);
	}
	function handleOpenDescription() {
		setOpenDescription(!openDescription);
	}

	function completeTodo(id: any) {
		dispatch(toggleTodoComplete(id));
	}
	/**
	 * for removing todo
	 * @param {string} id
	 */
	function remove(id: any) {
		dispatch(removeTodo(id));
	}

	return (
		<div className={style.todo}>
			<div className={style.todo_check}>
				<label htmlFor='checkbox'></label>
				<input
					className={style.todo_check_checkbox}
					type='checkbox'
					checked={props.complete}
					onChange={() => completeTodo(props.id)}
				/>
				<p className={style.todo_check_date}>{props.date}</p>
			</div>
			<div
				className={
					props.complete
						? `${style.todo_text} ${style.todo_complete}`
						: style.todo_text
				}>
				<div className={style.todo_text_title}>
					<p>{props.title}</p>
				</div>
			</div>
			<div className={style.todo_btn}>
				{props.file.length ? (
					<span className={style.todo_icon}>{attach}</span>
				) : null}

				<button onClick={() => handleOpenDescription()}>Viewing</button>
				<Link to={`/update/${data.id}`}>
					<button>Edit</button>
				</Link>
				<button onClick={() => remove(props.id)}>Remove</button>
			</div>
			{openDescription ? (
				<TodoView todos={props} handleOpen={handleOpenDescription} />
			) : null}
			{open ? <FileView files={props.file} handleOpen={handleOpen} /> : null}
		</div>
	);
};
