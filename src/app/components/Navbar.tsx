import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs'
const logo = require('../assets/logo-white.png');
const Navbar = () => {
	return (
		<div className="bg-primary flex flex-row justify-between items-center py-8 px-8">
			<NavLink to="/">
				<div className="cursor-pointer">
					<img
						src={logo}
						alt=""
						className="h-12 w-auto"
					/>
				</div>
			</NavLink>
			<div className="search">
				<div className="search-container flex flex-row gap-[2px]">
					<input type="search" className="input-field text-center border border-slate-100" placeholder="Search Cars" />
					<button className="button bg-white text-primary px-5 hover:bg-primary-light">
					 	<BsSearch />
					</button>
				</div>
			</div>
			<nav className="font-medium text-white">
				<ul className="flex flex-row gap-8">
					<NavLink to="/">
						<li className="nav-border-style">Home</li>
					</NavLink>
					<NavLink to="/shop">
						<li className="nav-border-style">Buy</li>
					</NavLink>
					<NavLink to="/sell">
						<li className="nav-border-style">Sell</li>
					</NavLink>
					<NavLink to="/sell">
						<li className="nav-border-style">T&C</li>
					</NavLink>
					<NavLink to="/sell">
						<li className="nav-border-style">About</li>
					</NavLink>
					<NavLink to="/sell" className="">
						<li className="nav-border-style">Contact</li>
					</NavLink>
				</ul>
			</nav>
			<div className="text-white text-sm font-semibold px-4">
				Sign In
			</div>
		</div>
	);
};

export default Navbar;
