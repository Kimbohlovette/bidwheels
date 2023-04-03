import React from 'react';
import { AiFillInfoCircle } from 'react-icons/ai';
import { MdOutlineGavel } from 'react-icons/md';
import { MdLocationOn } from 'react-icons/md';
import { IoSpeedometerSharp } from 'react-icons/io5';
import { ProductType } from '../types';

const Product = (props: { product: ProductType }) => {
	const image = require('../assets/m23.jpeg');
	return (
		<div className="max-w-xs shadow-lg border rounded-sm border-slate-50">
			<div>
				<img src={image} alt="" />
			</div>
			<div className="px-4 py-8">
				<h1 className="font-semibold text-primary mb-2">
					2015 Jeep Jerokee Latitude 4WD
				</h1>
				<div className="flex flex-row justify-between py-2 text-primary font-semibold">
					<div>$2000</div>
					<button className="text-lg rounded-full shadow-inner">
						<AiFillInfoCircle />
					</button>
				</div>
				<div className="flex flex-row justify-between py-2">
					<div className="text-primary font-extralight">
						1222{' '}
						<span className="text-xs">
							mil
							<IoSpeedometerSharp className="inline mx-1" />
						</span>
					</div>
					<div className="text-green-500 font-extralight">
						Bidding in progress
					</div>
				</div>
				<div className="flex flex-row justify-between py-2">
					<div className="text-primary font-extralight">
						Limbe, Mile 4<MdLocationOn className="inline mx-1" />
					</div>
					<button className="text-white bg-primary button shadow-lg px-5 font-semibold text-sm">
						<MdOutlineGavel className="inline mr-1" />
						Bid
					</button>
				</div>
			</div>
		</div>
	);
};

export default Product;
