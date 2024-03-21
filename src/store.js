import {configureStore} from "@reduxjs/toolkit";
import MenuReducer from './features/menuSlice.js'
import SingleMenuItemReducer from './features/singleMenuItemSlice.js'

export const store = configureStore({
	reducer: {
		Menu: MenuReducer,
		SingleMenuItem: SingleMenuItemReducer
	}
})
