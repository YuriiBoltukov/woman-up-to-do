import React from 'react';
import style from './view.module.scss';

export const TodoView = (props: any) => {
	const { title, date, description, file } = props.todos.todos;
	console.log(props.todos.todos);
	return (
		<div className={style.drop_shadow}>
			<div className={style.view}>
				<div>
					<h4>{title}</h4>
				</div>
				<div>{date}</div>
				<div>
					<p>{description}</p>
				</div>
				<div>
					<ul>
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
					<button>Edit</button>
					<button>Close</button>
				</div>
			</div>
		</div>
	);
};
