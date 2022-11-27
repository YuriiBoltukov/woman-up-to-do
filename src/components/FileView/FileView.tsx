import React from 'react';
import style from './file.module.scss';

export const FileView = (props: any) => {
	return (
		<div className={style.drop_shadow}>
			<div className={style.file}>
				<h4>Added files</h4>
				{props.files.length ? (
					<div>
						<ul>
							{props.files.map((item: any, i: any) => {
								return <li key={i}>{item}</li>;
							})}
						</ul>
					</div>
				) : (
					<p className={style.file_text}>
						Sorry but you haven't added files yet!
					</p>
				)}
				<button onClick={props.handleOpen}>close</button>
			</div>
		</div>
	);
};
