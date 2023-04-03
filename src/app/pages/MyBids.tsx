import React, { useEffect, useState } from 'react';
import { base_url } from '../App';
import axios from 'axios';
import { BidButton } from '../components/Product';

const MyBids = () => {
	let token: any;
	let user: any;
	const tokenString = localStorage.getItem("@token")
	const userString = localStorage.getItem('@user')
	if (tokenString && userString) {
		token = JSON.parse(tokenString)
		user = JSON.parse(userString)
	}

	const [userBids, setUserBids] = useState([]) as any;

	useEffect(() => {
		const getUserBids = async () => {
			const userBidsData = await axios.get(`${base_url}/user/bid?userId=${user._id}`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			})

			console.log('user bids: ', userBidsData)
			setUserBids(userBidsData.data.data)
		}
		getUserBids();
	}, [token, user._id])
	console.log('user bids: ', userBids.length)
	return (
		<div>
			{userBids.length === 0 ? (
				<div className="flex justify-center min-h-screen">
					<p className="text-lg font-medium text-primary mt-20">You do not currently have bids in progress.</p>
				</div>
			) : <div className="flex justify-center text-center min-h-screen">
				<div className="w-full sm:max-w-xl divide-y border my-10 [&>*]:py-4 [&>*]:px-4">
					<div className="grid grid-cols-3 text-white bg-primary [&>*]:text-sm">
						<div className="flex flex-row items-center">Product name</div>
						<div className="flex flex-row items-center">Bid position</div>
						<div className="flex flex-row items-center">Action</div>

					</div>
					{userBids.map((bid: any, i: any) => <BidItem bid={bid} key={i} />)}
				</div>
			</div>}
		</div>
	);
};

const BidItem = ({ bid }: any) => {
	const [bidLeaderBoard, setBidLeaderBoard] = useState([]) as any;
	const [product, setProduct] = useState([]) as any;
	let token: any;
	let user: any;
	const tokenString = localStorage.getItem("@token")
	const userString = localStorage.getItem('@user')
	if (tokenString && userString) {
		token = JSON.parse(tokenString)
		user = JSON.parse(userString)
	}

	useEffect(() => {
		const getData = async () => {
			const leaderboard = await axios.get(`${base_url}/user/bid/getLeaderBoard/${bid.productId}`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			setBidLeaderBoard(leaderboard.data.data)

			const productData = await axios.get(`${base_url}/product/${bid.productId}`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			setProduct(productData.data.data)
		}
		getData()
	}, [bid.productId, token])
	const yourBid = bidLeaderBoard.find((e: any) => e.user === `${user.username} (You)`)
	return (
		<div className="grid grid-cols-3">
			<div>{product?.name}</div>
			<div>{yourBid?.position}</div>
			<div><BidButton /></div>
		</div>
	)
}

export default MyBids;
