import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa';
import { AiFillCaretDown } from 'react-icons/ai';
import Auth from './Auth';
const logo = require('../assets/logo-white.png');
const Navbar = () => {
	const [auth, setAuth] = useState(false)
	let user;
	const userString = localStorage.getItem('@user')
	if (userString) {
		user = JSON.parse(userString)
	}

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
					{(!user || user.role.code === 'buyer') && < NavLink to="/shop">
						<li className="nav-border-style">Buy</li>
					</NavLink>}
					{(!user || user.role.code === 'seller') && <NavLink to="/sell">
						<li className="cursor-pointer">Sell</li>
					</NavLink>}
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
			{
				user ? <p className="text-white hover:cursor-pointer"><Avatar username={user.username} /></p> : <div className="text-white hover:cursor-pointer font-semibold px-4" onClick={() => setAuth(true)}>
					Sign In
				</div>
			}

			{
				auth && (<>
					<div className="fixed top-0 bg-primary/70 backdrop-blur-sm min-h-screen left-0 w-full z-50">
						<Auth setAuth={setAuth} />
					</div>
				</>
				)
			}
		</div >
	);
};

const Avatar = (props: { username: string }) => {
	const [visible, setVisible] = useState(false);
	const logout = () => {
		localStorage.removeItem('@user');
		localStorage.removeItem('@token');
		window.location.reload()
	}
	return (
		<>
			<div className='flex items-center flex-col'>
				<div className="rounded-full shadow-inner border h-10 w-10 overflow-hidden flex justify-center items-center">
					{/* <img src={props.thumbNail} alt="" className='w-full h-auto object-cover object-center aspect-square' /> */}
					<FaUser className="text-white" />
				</div>
				<div className='text-xs'>{props.username}</div>
				<AiFillCaretDown className='text-center' onClick={() => setVisible(!visible)} />
			</div>
			{visible && <div className='border rounded-sm absolute z-50 right-3 bg-white text-slate-700'>
				<ul className="px-4 py-5 divide-y gap-y-2 [&>*]:p-2 [&>*:hover]:bg-slate-200">
					<li>My Profile</li>
					<li>My Bids</li>
					<li onClick={logout}>Logout</li>
				</ul>
			</div>}
		</>

	)
}

export default Navbar;
