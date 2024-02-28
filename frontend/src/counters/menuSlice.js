import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	id: '',
	title: '',
	imageURL: '',
};

export const menuSlice = createSlice({
	name: 'Menu',
	initialState,
	reducers: {
		add: (state) => {},
	},
});

export const { add } = menuSlice.actions;

export default menuSlice.reducer;
