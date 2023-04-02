import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Auth = () => {
	const [isLogin, setAuthType] = useState<boolean>(true);
	return (
		<div className="fixed flex justify-center w-screen min-h-screen bg-white">
			<div className="p-8 bg-white py-5 border mt-16 w-2/3">
				<div className="py-5 border-b">
					<ul className="flex flex-row justify-evenly divide-x text-center">
						<li
							className="flex-1 cursor-pointer"
							onClick={() => {
								setAuthType(false);
							}}
						>
							SIGN UP
						</li>
						<li
							className="flex-1 cursor-pointer"
							onClick={() => {
								setAuthType(true);
							}}
						>
							SIGN IN
						</li>
					</ul>
				</div>
				<div className="">
					{isLogin ? <SignIn /> : <SignUp />}
				</div>
			</div>
		</div>
	);
};

export default Auth;
