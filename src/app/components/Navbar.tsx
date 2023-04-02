import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs'
import Auth from './Auth';
const logo = require('../assets/logo-white.png');
const Navbar = () => {
	const [auth, setAuth] = useState(false)
	let user;
	const userString = localStorage.getItem('@user')
	if (userString) {
		user = JSON.parse(userString)
	}

	console.log('user from nav: ', user)

	return (
		<div className="bg-primary flex flex-row justify-between items-center py-8 px-8 font-semibold text-lg text-white">
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
				<div className="search-container flex flex-row gap-4">
					<input type="search" className="input-field border-primary" />
					<button className="button bg-white text-primary px-5 hover:bg-primary-light">
						<BsSearch />
					</button>
				</div>
			</div>
			<nav className="font-medium text-white">
				<ul className="flex flex-row gap-8">
					<NavLink to="/">
						<li className="cursor-pointer">Home</li>
					</NavLink>
					{(!user || user.role.code === 'buyer') && < NavLink to="/shop">
						<li className="cursor-pointer">Buy</li>
					</NavLink>}
					{(!user || user.role.code === 'seller') && <NavLink to="/sell">
						<li className="cursor-pointer">Sell</li>
					</NavLink>}
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
			{
				user ? <p>{user.username}</p> : <div className="text-white hover:cursor-pointer font-semibold px-4" onClick={() => setAuth(true)}>
					Sign In
				</div>
			}

			{
				auth && <div className="fixed top-0 bg-primary/70 backdrop-blur-sm min-h-screen left-0 w-full z-50">
					<Auth setAuth={setAuth} />
				</div>
			}
		</div >
	);
};

export default Navbar;
