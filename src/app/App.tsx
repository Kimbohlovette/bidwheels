import React from 'react';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AddCarForm from './pages/AddCarForm';
import Shop from './pages/Shop';

export const base_url = 'https://api-bid4wheels.onrender.com/api/v1'

const MyApp = (): JSX.Element => {
	return (
		<div>
			<Navbar />
			<div>
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

const routes = createBrowserRouter([
	{
		element: <MyApp />,
		children: [
			{ path: '/', element: <Home /> },
			{
				path: '/shop',
				element: <Shop />,
			},
			{
				path: '/sell',
				element: <AddCarForm />,
			},
		],
	},
]);
function App() {
	return (
		<>
			<RouterProvider router={routes} />
		</>
	);
}

export default App;
