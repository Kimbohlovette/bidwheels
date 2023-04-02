import React from 'react';

const SignIn = () => {
	return (
		<div className="py-8">
			<div className="flex flex-col gap-y-8 py-12">
				<input
					className="input-field"
					type="text"
					placeholder="Email or Phone number"
				/>
				<input
					className="input-field"
					type="text"
					placeholder="Password"
				/>
				<button className="button bg-blue-500 text-white">SIGN IN</button>
			</div>
		</div>
	);
};

export default SignIn;
