import { configureStore } from '@reduxjs/toolkit';
import { menuSlice, singleMenuItemSlice } from './counters';

export const store = configureStore({
	reducer: {
		menu: menuSlice,
		singleMenuItem: singleMenuItemSlice,
	},
});
