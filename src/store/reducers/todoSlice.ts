import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import { nanoid } from 'nanoid';
import { IState, ITodo } from '../../models/data';

const todoSlice = createSlice({
	name: 'todos',
	initialState: {
		todos: [
			{
				id: '1',
				title: 'add item to list',
				complete: false,
				description: 'lorem',
				date: '22-12-22',
				file: [],
			},
			{
				id: '2',
				title: 'you can delete item from list',
				complete: false,
				description: 'lorem',
				date: '22-12-22',
				file: [],
			},
			{
				id: '3',
				title: 'click on item to check',
				complete: false,
				description: 'lorem',
				date: '22-12-22',
				file: [],
			},
			{
				id: '4',
				title: 'click on item again to uncheck',
				complete: true,
				description: 'lorem',
				date: '22-12-22',
				file: [],
			},
		],
	},
	reducers: {
		addTodo(state: IState, action: PayloadAction<ITodo>) {
			state.todos.push({
				id: nanoid().slice(4),
				title: action.payload.title,
				description: action.payload.description,
				date: dayjs().format('DD.MM.YY'),
				file: action.payload.file,
				complete: action.payload.complete,
			});
		},
		removeTodo(state: IState, action: PayloadAction<ITodo>) {
			state.todos = state.todos.filter(todo => todo?.id !== action.payload.id);
		},
		toggleTodoComplete(state, action) {},
		editTodo(state, action) {},
	},
});

export const { addTodo, removeTodo, toggleTodoComplete, editTodo } =
	todoSlice.actions;

export default todoSlice.reducer;
