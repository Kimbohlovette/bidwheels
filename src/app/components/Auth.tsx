import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";



const Auth = ({ setAuth }: any) => {
	const [isLogin, setIsLogin] = useState<boolean>(false);
	const image = require('../assets/black-man.jpg')
	const logo = require('../assets/logo.png')

	return (
		<div className="p-8 mx-auto bg-white py-5 border mt-2 w-4/5 flex flex-row relative min-h-max">
			<div className="flex-1">
				<img src={image} alt="man sitting in a car" className="min-h-[550px] object-cover aspect-video" />
			</div>
			<div className="flex-1 mx-auto">
				<div className="flex flex-col gap-y-2 items-center justify-center">
					<img src={logo} alt="" className="h-16 w-auto" />
					<p className="text-primary-light text-center text-xs">Join Bid 4 Wheels to get the Best and Latest</p>
				</div>
				<div className="">{isLogin ? <SignIn setAuth={setAuth}/> : <SignUp setAuth={setAuth}/>}</div>
				{/* <div className="flex mt-10 bottom-5 mx-auto"> */}
				{isLogin ? (
					<p className="text-primary font-medium text-sm text-center mt-10">
						Don't have an account?{" "}
						<span className="text-primary font-semibold hover:cursor-pointer" onClick={() => setIsLogin(false)}>
							SIGN UP
						</span>
					</p>
				) : (
					<p className="text-primary font-medium text-sm text-center mt-10">
						Already have an account?{" "}
						<span className="text-primary font-semibold hover:cursor-pointer" onClick={() => setIsLogin(true)}>
							LOG IN
						</span>
					</p>
				)}
				{/* </div> */}
			</div>
		</div>
	);
};

export default Auth;
