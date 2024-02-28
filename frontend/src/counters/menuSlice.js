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
		watch: (state) => {},
	},
});

export const { watch } = menuSlice.actions;

export default menuSlice.reducer;
