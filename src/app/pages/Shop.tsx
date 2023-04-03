import React from 'react';
import Product from '../components/Product';

const Shop = () => {
	return (
		<div className="min-h-screen">
			<section className="relative h-[75vh] flex items-center">
				<img
					// src={bgImage}
					alt=""
					className="top-0 left-0 w-full h-full -z-10 object-[(50%,_80%)] aspect-video"
				/>
				<div className="w-full p-8 flex flex-col justify-center items-center sm:flex-row absolute top-0 left-0 h-full bg-primary/40">
					<div className="action-card flex-1 py-16 px-8 max-w-lg">
						<h1 className="text-3xl text-slate-50 font-bold mb-5">
							Let Us Help You Find Your Dream Ride
						</h1>
						<p className="text-slate-100 text-sm">
							Shop the latest car models and accessories, Save
							with Bid 4 Wheels Trade-In, carrier offers, and
							flexible payment options. Get expert help today.
						</p>
					</div>
				</div>
			</section>
			<section>
				<div className="">
					<h1 className="text-2xl text-primary font-bold my-4">
						Filter Products
					</h1>
					<div className="flex flex-row">
						<div className="border p-16 max-w-sm [&_select]:w-full [&_select]:rounded-sm [&_select:focus]:border-primary [&_select:focus]:shadow-sm [&_select:focus]:shadow-primary-light">
							<div>
								<h1 className="text-4xl text-primary font-bold my-4">
									Price
								</h1>
								<select
									className="form-select my-4"
									name="price"
									id="price"
								>
									<option value="0">Filter by price</option>
									<option value="1">20,0000000</option>
									<option value="2">10,0000000</option>
									<option value="3">50,0000000</option>
								</select>
							</div>
							<div>
								<h1 className="text-4xl text-primary font-bold my-4">
									Model
								</h1>
								<select
									className="form-select my-4"
									name="model"
									id="model"
								>
									<option value="0">Filter by model</option>
									<option value="1">M1</option>
									<option value="2">M2</option>
									<option value="3">M3</option>
								</select>
							</div>
							<div>
								<h1 className="text-4xl text-primary font-bold my-4">
									Fuel Type
								</h1>
								<select
									className="form-select my-4"
									name="price"
									id="price"
								>
									<option value="0">
										Filter by fuel type
									</option>
									<option value="1">F1</option>
									<option value="2">F2</option>
									<option value="3">F3</option>
								</select>
							</div>
							<div>
								<h1 className="text-4xl text-primary font-bold my-4">
									Engine
								</h1>
								<select
									className="form-select my-4"
									name="price"
									id="price"
								>
									<option value="0">Filter by Engine</option>
									<option value="1">V1</option>
									<option value="2">W1</option>
									<option value="3">V7</option>
								</select>
							</div>{' '}
						</div>
						<div>
							<Product />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
export default Shop;
