import React from 'react';
import { Link } from 'react-router-dom';
import style from './view.module.scss';

export const TodoView = (props: any) => {
	const { title, date, description, file } = props.todos;

	return (
		<div className={style.drop_shadow} onClick={props.handleOpen}>
			<div className={style.file}>
				<div>{date}</div>
				<div>
					<h4>{title}</h4>
				</div>
				<div>
					<p>{description}</p>
				</div>
				<div>
					<ul className={style.file_list}>
						{file ? (
							file.map((item: any, i: any) => {
								return <li key={i}>{item}</li>;
							})
						) : (
							<p>No files added</p>
						)}
					</ul>
				</div>
				<div>
					<Link to='/update'>
						<button>Edit</button>
					</Link>
					<button onClick={props.handleOpen}>Close</button>
				</div>
			</div>
		</div>
	);
};
