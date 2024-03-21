import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	id: '',
	title: '',
	content: '',
	imageURL: ''
}

export const singleMenuItemSlice = createSlice({
	name: 'SingleMenuItem',
	initialState,
	reducers: {}
})


export default singleMenuItemSlice.reducer