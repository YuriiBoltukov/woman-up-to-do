import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { ITodo, ITodoRes, ITodoState } from '../../models/data';
import { getFromLocalStorage } from '../services/todo.services';

// export const fetchToDos = createAsyncThunk('todos', thunkAPI => {
// 	const response = getFromLocalStorage<ITodoRes[]>('todos');
// 	return response;
// });

const todoSlice = createSlice({
	name: 'todos',
	initialState: {
		todos: [
			{
				id: '1',
				title: 'add item to list',
				complete: false,
				description: 'lorem',
				date: '2022/12/20',
				file: [],
			},
			{
				id: '2',
				title: 'you can delete item from list',
				complete: false,
				description: 'lorem',
				date: '2022/12/20',
				file: [],
			},
			{
				id: '3',
				title: 'click on item to check',
				complete: false,
				description: 'lorem',
				date: '2022/12/20',
				file: [],
			},
			{
				id: '4',
				title: 'click on item again to uncheck',
				complete: true,
				description: 'lorem',
				date: '2022/12/20',
				file: [],
			},
		],
	},
	reducers: {
		addTodo(state: ITodoState, action: PayloadAction<ITodo>) {
			state.todos.push({
				id: nanoid().slice(4),
				title: action.payload.title,
				description: action.payload.description,
				date: action.payload.date,
				file: action.payload.file,
				complete: action.payload.complete,
			});
		},
		removeTodo(state: ITodoState, action: PayloadAction<ITodo>) {
			state.todos = state.todos.filter(
				(todo: any) => todo.id !== action.payload
			);
		},
		toggleTodoComplete(state, action) {
			const toggledTodo = state.todos.find(todo => todo.id === action.payload);
			if (toggledTodo) toggledTodo.complete = !toggledTodo.complete;
		},
		editTodo(state, action) {
			state.todos.forEach((todo: any) => {
				if (todo.id === action.payload.id) {
					todo.title = action.payload.title;
					todo.description = action.payload.description;
					todo.date = action.payload.date;
					todo.file = action.payload.file;
				}
			});
		},
		fetchToDos(state, action) {
			const response = getFromLocalStorage<ITodoRes[]>('todos');
			if (!response) return;
			state.todos.length = 0;
			state.todos.push(...response);
		},
	},
	// extraReducers: builder => {
	// 	builder.addCase(fetchToDos.fulfilled, (state, action) => {
	// 		console.log(action);
	// 		//state.todos.push(action.payload);
	// 	});
	// },
});

export const { addTodo, removeTodo, toggleTodoComplete, editTodo } =
	todoSlice.actions;

export default todoSlice.reducer;
