import React, { useState } from 'react';
import style from './upload.module.scss';

export const Upload = () => {
	const [drag, setDrag] = useState(false);

	function dragStartHandler(e: any) {
		e.preventDefault();
		setDrag(true);
	}

	function dragLeaveHandler(e: any) {
		e.preventDefault();
		setDrag(false);
	}

	function onDropHandler(e: any) {
		e.preventDefault();
		let files = [...e.dataTransfer.files];
		const formData = new FormData();
		formData.append('file', files[0]);
		setDrag(false);
	}

	return (
		<div className={style.drag}>
			{drag ? (
				<div
					className={style.drag_drop}
					onDragStart={e => dragStartHandler(e)}
					onDragLeave={e => dragLeaveHandler(e)}
					onDragOver={e => dragStartHandler(e)}
					onDrop={e => onDropHandler(e)}>
					release the files to download them
				</div>
			) : (
				<div
					className={style.drag_drop_area}
					onDragStart={e => dragStartHandler(e)}
					onDragLeave={e => dragLeaveHandler(e)}
					onDragOver={e => dragStartHandler(e)}>
					drag and drop files to upload them
				</div>
			)}
		</div>
	);
};
