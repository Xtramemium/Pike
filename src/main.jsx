import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './store.js';
import { BrowserRouter } from 'react-router-dom';
import { SpeedInsights } from "@vercel/speed-insights/next"
import '../index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Provider store={store}>
			<SpeedInsights>
				<App />
			</SpeedInsights>
		</Provider>
	</BrowserRouter>,
);
