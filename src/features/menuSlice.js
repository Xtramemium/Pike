import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	menu: [],
	title: '',
	imageURL: ''
}

export const menuSlice = createSlice({
	name: 'Menu',
	initialState,
	reducers: {}
})


export default menuSlice.reducer
