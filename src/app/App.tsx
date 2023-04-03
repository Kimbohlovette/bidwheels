import React from 'react';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import MyBids from './pages/MyBids';

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
				path: '/my-bids',
				element: <MyBids />,
			},
			{
				path: '/product/:id',
				element: <ProductDetails />,
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
