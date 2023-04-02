import React, { useState } from 'react';
import { base_url } from '../App';
import axios from 'axios';

const SignIn = ({ setAuth }: any) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('')
	const [loading, setLoading] = useState(false)
	const signin = async () => {
		if (email && password) {
			try {
				setLoading(true)
				const user = await axios.post(`${base_url}/auth/login`, { email, password })
				if (user.data.status === "OK") {
					console.log('user: ', user)
					localStorage.setItem('@token',JSON.stringify(user.data.token))
					localStorage.setItem('@user',JSON.stringify(user.data.data.user))
					setAuth(false)
				} else {
					throw new Error(user.data.message)
				}
			} catch (error) {
				console.log("error: ", error)
			} finally {
				setLoading(false)
			}
		}
	}
	return <div className="w-full ml-8">
			<div>
				<div className="mb-1 pr-5">
					<label htmlFor="" className='text-primary text-sm'>Email</label><br />
					<input type="text" name="fullname" className="w-full border-[2px] border-primary text-slate-800 text-sm" onChange={(e) => setEmail(e.target.value)} />
				</div>
				<div className="mb-1 pr-5">
					<label htmlFor="" className='text-primary text-sm'>Password</label><br />
					<input type="password" name="fullname" className="w-full border-[2px] border-primary text-slate-800 text-sm required" onChange={(e) => setPassword(e.target.value)} />
				</div>
			</div>
			<div className="flex items-center w-full">
				<button className="button text-white bg-primary px-3 rounded-lg self-center" onClick={(e) => {
					e.preventDefault()
					signin()
				}}>{loading ? "Wait..." : "Sign in"}</button>
			</div>
	</div>;
};

export default SignIn;
