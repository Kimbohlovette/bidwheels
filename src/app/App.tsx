import React from 'react';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cars from './pages/Cars';
import Home from './pages/Home';
import AddCarForm from './pages/AddCarForm';
import Auth from './components/Auth';
const MyApp = (): JSX.Element => {
	return (
		<div>
      <Auth />
			<Navbar />
			<div className="">
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
				path: '/cars',
				element: <Cars />,
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
