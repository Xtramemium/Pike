import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	id: '',
	title: '',
	content: '',
	imageURL: '',
};

export const singleMenuItemSlice = createSlice({
	name: 'SingleMenuItem',
	initialState,
	reducers: {
		add: () => {},
	},
});

export const { add } = singleMenuItemSlice.actions;

export default singleMenuItemSlice.reducer;
