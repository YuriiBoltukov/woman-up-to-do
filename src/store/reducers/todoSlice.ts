import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { ITodo, ITodoRes, ITodoState } from '../../models/data';

// export const fetchToDos = createAsyncThunk('todos', thunkAPI => {
// 	const response = getFromLocalStorage<ITodoRes[]>('todos');
// 	return response;
// });

const todoSlice = createSlice({
	name: 'todos',
	initialState: {
		todos: [],
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
		removeTodo(state: ITodoState, action: PayloadAction<string>) {
			state.todos = state.todos.filter(
				(todo: ITodoRes) => todo.id !== action.payload
			);
		},
		toggleTodoComplete(state: ITodoState, action: PayloadAction<string>) {
			const toggledTodo = state.todos.find(todo => todo.id === action.payload);
			if (toggledTodo) toggledTodo.complete = !toggledTodo.complete;
		},
		editTodo(state: ITodoState, action: PayloadAction<ITodoRes>) {
			state.todos.forEach((todo: ITodoRes) => {
				if (todo.id === action.payload.id) {
					todo.title = action.payload.title;
					todo.description = action.payload.description;
					todo.date = action.payload.date;
					todo.file = action.payload.file;
				}
			});
		},
	},
});

export const { addTodo, removeTodo, toggleTodoComplete, editTodo } =
	todoSlice.actions;

export default todoSlice.reducer;
