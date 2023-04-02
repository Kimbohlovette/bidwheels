import axios from "axios";
import React, { useState } from "react";
import { base_url } from "../App";

const SignUp = ({ setAuth }: any) => {
	const [role, setRole] = useState("buyer");
	const [fullname, setFullname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");

	const [loading, setLoading] = useState(false);

	const signup = async () => {
		console.log("in the sign up function");
		console.log(
			"credentials: ",
			role,
			fullname,
			email,
			password,
			passwordConfirm
		);
		if (role && fullname && email && password && passwordConfirm) {
			console.log("all good: ");
			try {
				setLoading(true);
				const user = await axios.post(`${base_url}/auth/signup`, {
					role,
					fullname,
					email,
					password,
					passwordConfirm,
				});
				if (user.data.status === "OK") {
					setAuth(false);
					localStorage.setItem('@token', JSON.stringify(user.data.token))
					localStorage.setItem('@user', JSON.stringify(user.data.data.user))
				}
				else {
					throw new Error(user.data.message)
				}
			} catch (error) {
				console.log("error: ", error);
			} finally {
				setLoading(false);
			}
		}
	};

	return (
		<div className="w-full ml-8">
			<form onSubmit={signup}>
				<div className="mb-1">
					<label htmlFor="" className="text-primary text-sm">
						Sign up as:
					</label>
					<br />
					<div className="flex items-center">
						<div className="flex flex-1">
							<input
								type="radio"
								id="buyer"
								value="buyer"
								name="role"
								className="mr-2"
								onClick={() => setRole("buyer")}
								required
							/>
							<label htmlFor="buyer" className="text-primary text-sm">
								Buyer
							</label>
						</div>
						<div className="flex flex-1">
							<input
								type="radio"
								id="seller"
								value="seller"
								name="role"
								className="mr-2"
								onClick={() => setRole("seller")}
								required
							/>
							<label htmlFor="seller" className="text-primary text-sm">
								Seller
							</label>
						</div>
					</div>
				</div>
				<div>
					{role === "seller" && (
						<div className="mb-1">
							<label htmlFor="" className="text-primary text-sm">
								What type of seller are you?
							</label>
							<br />
							<div className="flex">
								<div className="flex flex-1 items-center">
									<input
										type="radio"
										id="privateCarOwner"
										value="private"
										name="buyerType"
										className="mr-2"
										required
									/>
									<label
										htmlFor="privateCarOwner"
										className="text-primary text-sm"
									>
										Private car owner
									</label>
								</div>
								<div className="flex flex-1">
									<input
										type="radio"
										id="importingPartner"
										value="partner"
										name="buyerType"
										className="mr-2"
										required
									/>
									<label
										htmlFor="importingPartner"
										className="text-primary text-sm"
									>
										Importing partner
									</label>
								</div>
							</div>
						</div>
					)}
					<div className="mb-1 pr-5">
						<label htmlFor="" className="text-primary text-sm">
							Full name
						</label>
						<br />
						<input
							type="text"
							name="fullname"
							className="w-full border-[2px] border-primary text-slate-800 text-sm"
							onChange={(e) => setFullname(e.target.value)}
							required
						/>
					</div>
					<div className="mb-1 pr-5">
						<label htmlFor="" className="text-primary text-sm">
							Email
						</label>
						<br />
						<input
							type="text"
							name="fullname"
							className="w-full border-[2px] border-primary text-slate-800 text-sm"
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className="mb-1 pr-5">
						<label htmlFor="" className="text-primary text-sm">
							Password
						</label>
						<br />
						<input
							type="password"
							name="fullname"
							className="w-full border-[2px] border-primary text-slate-800 text-sm required"
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>
					<div className="mb-1 pr-5">
						<label htmlFor="" className="text-primary text-sm">
							Confirm password
						</label>
						<br />
						<input
							type="password"
							name="fullname"
							className="w-full border-[2px] border-primary text-slate-800 text-sm"
							onChange={(e) => setPasswordConfirm(e.target.value)}
							required
						/>
					</div>
				</div>
				<div className="flex items-center w-full">
					<button
						className="button text-white bg-primary px-3 rounded-lg self-center"
						onClick={(e) => {
							e.preventDefault();
							signup();
						}}
					>
						{loading ? "Wait..." : "Sign up"}
					</button>
				</div>
			</form>
		</div>
	);
};

export default SignUp;
