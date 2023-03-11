// import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import MainLayout from './commonComponents/MainLayout/MainLayout';

import Router from './routes/Router';

import './static/index.scss';

const rootDiv = document.getElementById('root');
const root = ReactDOM.createRoot(rootDiv);

root.render(
	<BrowserRouter>
		<MainLayout>
			<Router />
		</MainLayout>
	</BrowserRouter>
);

