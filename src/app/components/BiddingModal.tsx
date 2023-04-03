import React, { useEffect, useState } from 'react';
import { AiTwotoneStop } from 'react-icons/ai';
import { BsStarFill } from 'react-icons/bs';
import CountdownTimer from './CountdownTimer';
import { BidButton } from './Product';
import { ProductType } from '../types';
import axios from 'axios';
import { base_url } from '../App';

const BiddingModal = (props: { product: ProductType, setProduct: any }) => {
	let token: any;
	const tokenString = localStorage.getItem("@token")
	if (tokenString) {
		token = JSON.parse(tokenString)
	}

	const [bid, setBid] = useState() as any;
	const [leaderboard, setLeaderboard] = useState([]) as any;
	const [amount, setAmount] = useState(0) as any;
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const getBid = async () => {
			const bidData = await axios.get(`${base_url}/user/bid/all?product=${props.product._id}`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			setBid(bidData.data.data)
		}
		const getLeaderBoard = async () => {
			const leaderboardData = await axios.get(`${base_url}/user/bid/getLeaderBoard/${props.product._id}`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			setLeaderboard(leaderboardData.data.data)

		}
		getBid();
		getLeaderBoard()
	}, [props.product._id, token])

	const image = require('../assets/m23.jpeg');

	const createBid = async () => {
		try {
			setLoading(true)
			const bidData = await axios.post(`${base_url}/user/bid`, {
				productId: props.product._id,
				productStatus: props.product.status,
				minimumPrice: props.product.minPrice,
				amount
			}, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			console.log('bidData: ', bidData)
			props.setProduct(null)
		} catch (error) {
			console.log('error occured on bidding: ', error)
		} finally {
			setLoading(false)
		}

	}
	return (
		<div className="fixed top-0 left-0 w-full h-screen z-40 overflow-scroll bg-black/80 backdrop-blur-sm flex justify-center items-center">
			{
				(bid && leaderboard) ? <div className="w-4/5 bg-white shadow-xl py-16 px-8 overflow-scroll h-full">
					<h1 className="text-2xl font-bold text-primary">
						Make sure you go through this and understand before you
						start the process.
					</h1>
					<h2 className="my-2 text-xl text-primary">
						<AiTwotoneStop className="inline mr-2" />
						Bidding
					</h2>
					<p className="text-slate-600 pl-8">
						To make a bid, you will be required to pay 50% of your
						bidding price to claim your position. If you win, then
						you'll will be required to complete your money in 2 weeks
						else the next best person will claim the product.
					</p>
					<div className="flex flex-col md:flex-row gap-12 mt-10">
						<div className="flex-1 border shadow-lg py-8 px-4">
							<h1 className="text-2xl font-bold text-primary mb-5">
								Product Overview
							</h1>
							<div>
								<div>
									<img src={image} alt="" />
								</div>
								<div className="">
									<h1 className="text-3xl text-primary font-bold my-5">
										{props.product.name}
									</h1>
									<p className="text-slate-600 my-4">
										{props.product.description}
									</p>
									<div className="flex flex-row [&>*]:flex-1">
										<div className="flex flex-row gap-2 items-center justify start">
											<BsStarFill />
											<BsStarFill />
											<BsStarFill />
											<BsStarFill />
										</div>
										<div className="text-primary font-bold text-lg">
											{`MBP: ${props.product.minPrice}`}
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="flex-1 text-cenrter">
							<h1 className="text-2xl font-bold text-primary mb-5">
								Bid leaderboard
							</h1>
							<div className="px-4 py-2 divide-y border">
								<div className="bid-table-row text-primary font-medium">
									<div>Position</div>
									<div>User</div>
									<div>Amount</div>
								</div>
								{
									leaderboard.map((item: any) => <div className="bid-table-row hover:bg-slate-200">
										<div>{item.position}</div>
										<div>{item.user}</div>
										<div>{item.amount}</div>
									</div>)
								}
							</div>
							<div className="py-5">
								<CountdownTimer targetDate={bid[0].endDate} />
							</div>

							<div className="flex flex-row self-end">
								<input type="number" className='py-2 px-4 rounded-sm border outline-none' placeholder='Enter Amount' onChange={(e) => setAmount(e.target.value)} />
								<BidButton handleClick={createBid} loading={loading} />
							</div>
						</div>
					</div>
				</div> : <div className="w-4/5 bg-white shadow-xl py-16 px-8 overflow-scroll h-full">
					<h1 className="text-2xl font-bold text-primary">
						Make sure you go through this and understand before you
						start the process.
					</h1>
					<h2 className="my-2 text-xl text-primary">
						<AiTwotoneStop className="inline mr-2" />
						Bidding
					</h2>
					<p className="text-slate-600 pl-8">
						To make a bid, you will be required to pay 50% of your
						bidding price to claim your position. If you win, then
						you'll will be required to complete your money in 2 weeks
						else the next best person will claim the product.
					</p>
					<div className="flex flex-col md:flex-row gap-12 mt-10">
						<div className="flex-1 border shadow-lg py-8 px-4">
							<h1 className="text-2xl font-bold text-primary mb-5">
								Product Overview
							</h1>
							<div>
								<div>
									<img src={image} alt="" />
								</div>
								<div className="">
									<h1 className="text-3xl text-primary font-bold my-5">
										{props.product.name}
									</h1>
									<p className="text-slate-600 my-4">
										{props.product.description}
									</p>
									<div className="flex flex-row [&>*]:flex-1">
										<div className="flex flex-row gap-2 items-center justify start">
											<BsStarFill />
											<BsStarFill />
											<BsStarFill />
											<BsStarFill />
										</div>
										<div className="text-primary font-bold text-lg">
											{`MBP: ${props.product.minPrice}`}
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="flex-1 text-cenrter">
							<h1 className="text-2xl font-bold text-primary mb-5">
								Bid leaderboard
							</h1>
							<div className="px-4 py-2 divide-y border">
								<div className="bid-table-row text-primary font-medium">
									<div>Position</div>
									<div>User</div>
									<div>Amount</div>
								</div>
							</div>
							<div className="py-5">
								<CountdownTimer targetDate={"2023-05-02T08:49:36.490+00:00"} />
							</div>

							<div className="flex flex-row self-end">
								<input type="number" className='py-2 px-4 rounded-sm border outline-none' placeholder='Enter Amount' />
								<BidButton handleClick={createBid} loading={loading} />
							</div>
						</div>
					</div>
				</div>
			}
		</div>
	);
};

export default BiddingModal;
