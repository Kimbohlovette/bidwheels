import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	const logo = require('../assets/logo.png');
	return (
		<div className="bg-primary flex flex-row justify-between items-center py-8 px-4 font-semibold text-lg text-white">
			<NavLink to="/">
				<div className="cursor-pointer">
					<img
						src={logo}
						alt=""
						className="bg-white h-12 w-auto"
					/>
				</div>
			</NavLink>
			<nav className="">
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
					<NavLink to="/sell">
						<li className="cursor-pointer">T&C</li>
					</NavLink>
					<NavLink to="/sell">
						<li className="cursor-pointer">About</li>
					</NavLink>
					<NavLink to="/sell">
						<li className="cursor-pointer">Contact</li>
					</NavLink>
				</ul>
			</nav>
			<div>Login</div>
		</div>
	);
};

export default Navbar;
