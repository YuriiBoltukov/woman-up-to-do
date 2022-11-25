import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import { nanoid } from 'nanoid';
import { IState } from '../../models/data';

const todoSlice = createSlice({
	name: 'todos',
	initialState: {
		todos: [],
	},
	reducers: {
		addTodo(state: IState, action) {
			state.todos.push({
				id: nanoid().slice(4),
				title: action.payload.title,
				description: action.payload.description,
				date: dayjs().format('DD.MM.YY'),
				file: action.payload.file,
				complete: action.payload.complete,
			});
		},
		removeTodo(state, action) {},
		toggleTodoComplete(state, action) {},
		editTodo(state, action) {},
	},
});

export const { addTodo, removeTodo, toggleTodoComplete, editTodo } =
	todoSlice.actions;

export default todoSlice.reducer;
