import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className="flex flex-row justify-between py-4 px-5 bg-gray-200">
			<NavLink to="/">
				<div className="cursor-pointer">Brand</div>
			</NavLink>
			<nav>
				<ul className="flex flex-row gap-8">
					<NavLink to="/">
						<li className="cursor-pointer">Home</li>
					</NavLink>
					<NavLink to="/cars">
						<li className="cursor-pointer">Buy</li>
					</NavLink>
					<NavLink to="/sell">
						<li className="cursor-pointer">Sell</li>
					</NavLink>
				</ul>
			</nav>
			<div>Login</div>
		</div>
	);
};

export default Navbar;
