import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from './pages';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage />,
	},
	{
		path: '/menu',
		element: <div>Menu</div>,
	},
	{
		path: '/menu/:id',
		element: <div> Create or edit</div>,
	},
	{
		path: '/menu/:id/edit',
		element: <div> Create or edit </div>
	},
	{
		path: '/add-new-pos',
		element: <div> add new position </div>
	},
	{
		path: '/*',
		element: <div><h1>Page not found</h1></div>,
	},
]);
