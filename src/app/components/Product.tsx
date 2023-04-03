import React from 'react';
import { AiFillInfoCircle } from 'react-icons/ai';
import { MdOutlineGavel } from 'react-icons/md';
import { MdLocationOn } from 'react-icons/md';
import { IoSpeedometerSharp } from 'react-icons/io5';
import { ProductType } from '../types';
import { Link } from 'react-router-dom';

export const BidButton = (props: { handleClick?: any, loading?: boolean }) => {
	return (
		<button className="text-white bg-primary button shadow-lg px-5 font-semibold text-sm" onClick={props.handleClick}>
			<MdOutlineGavel className="inline mr-1" />
			{(props.loading && props.loading === true) ? 'Wait...' : 'Bid'}
		</button>
	)
}

const Product = (props: { product: ProductType, setProduct: any }) => {
	const image = require('../assets/' + props.product.coverImage);
	return (
		<div className="max-w-xs shadow-lg border rounded-sm border-slate-50">
			<div>
				<Link to={`/product/${props.product._id}`} state={props.product}>
					<img src={image} alt="" />
				</Link>
			</div>
			<div className="px-4 py-8">
				<h1 className="font-semibold text-primary mb-2">
					{props.product.name}
				</h1>
				<div className="flex flex-row justify-between py-2 text-primary font-semibold">
					<div>{`XAF ${props.product.minPrice}`}</div>
					<button className="text-lg rounded-full shadow-inner">
						<AiFillInfoCircle />
					</button>
				</div>
				<div className="flex flex-row justify-between py-2">
					<div className="text-primary font-extralight">
						1222{' '}
						<span className="text-xs">
							km
							<IoSpeedometerSharp className="inline mx-1" />
						</span>
					</div>
					{
						props.product.status === 'inBidding' ? <div className="text-green-500 font-extralight">
							Bidding in progress
						</div> : <div className="text-primary">
							No bid
						</div>
					}
				</div>
				<div className="flex flex-row justify-between py-2">
					<div className="text-primary font-extralight">
						Limbe, Mile 4<MdLocationOn className="inline mx-1" />
					</div>
					<BidButton handleClick={() => {
						props.setProduct(props.product)
					}} />
				</div>
			</div>
		</div >
	);
};

export default Product;
