import React, { useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { BiPlusMedical } from "react-icons/bi";
import { AiOutlineMinus } from "react-icons/ai";
import Car from "../components/Car";
import { MdEmail } from "react-icons/md";
import axios from "axios";
import { base_url } from "../App";
import { Link } from "react-router-dom";
import { ProductType } from "../types";
import CountdownTimer from "../components/CountdownTimer";

const whoweare = require("../assets/whoweare.png");
const bgImage = require("../assets/hero-bg-image1.jpg");

const Home = () => {
	const [products, setProducts] = useState<ProductType[]>([]);
	useEffect(() => {
		const getProducts = async () => {
			const productsFound = await axios.get(`${base_url}/product`);
			console.log("products found: ", productsFound.data.data);
			setProducts(productsFound.data.data);
			localStorage.setItem(
				"@products",
				JSON.stringify(productsFound.data.data)
			);
		};
		const loadProduct = async () => {
			// const productsString = localStorage.getItem('@products')
			// if (productsString) {
			// 	const localProducts = JSON.parse(productsString)
			// 	if (localProducts.length > 0) {
			// 		setProducts(localProducts)
			// 	} else {
			// 		getProducts()
			// 	}
			// } else {
			getProducts();
			// }
		};
		loadProduct();
	}, []);

	const faqs: { title: string; text: string }[] = [
		{
			title: "Can you sell a car without a title?",
			text: "No, for the sake of credibility and identification, you must provide a title for the car you are selling.",
		},
		{
			title: "What are my payment options?",
			text: "For now, we support payments through MTN Mobile Money",
		},
		{
			title: "Will I always receive an offer for my product?",
			text: "Yes! For as long as your product has not been sold, you will always receive offers on it.",
		},
		{
			title: "Can you sell a car without a title?",
			text: "	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, nobis. Deleniti illo accusamus facilis unde facere debitis. Blanditiis rerum quas saepe hic beatae nihil eaque aliquid placeat. Rem, odio optio.",
		},
		{
			title: "How to sell a car with Bid4Wheels?",
			text: "With Bid4Wheels, you can register to sell a car as an importing partner, or register to sell your car as an individual. In both cases, you will need to be verified.",
		},
		{
			title: "When do I get paid after I sell my car?",
			text: "Immediately the payment is complete, and our commission has been deducted, you will receive payments through our supported payment methods",
		},
	];
	return (
		<div className="min-h-screen w-full">
			<section className="relative h-[80vh] flex items-center">
				<img
					src={bgImage}
					alt=""
					className="top-0 left-0 w-full h-full -z-10 object-[(50%,_80%)] aspect-video"
				/>
				<div className="w-full p-8 flex flex-col items-center sm:flex-row absolute top-0 left-0 h-full bg-primary/40">
					<div className="caption flex-1 max-w-1/2">
						<h1 className="text-5xl font-bold text-slate-50 w-1/2 mx-auto">
							Buy your dream car at your own budget.
						</h1>
					</div>
					<div className="action-card flex-1 py-16 px-8 bg-primary/80 max-w-lg">
						<p className="text-slate-100 text-sm">
							Shop the latest car models and accessories, Save with Bid 4 Wheels
							Trade-In, carrier offers, and flexible payment options. Get expert
							help today.
						</p>
						<Link to="/shop">
							<button className="button w-48 text-primary bg-white border mt-8 font-semibold text-lg hover:bg-primary hover:text-white">
								BUY
							</button>
						</Link>
					</div>
				</div>
			</section>
			<section className="flex flex-row px-8 py-8">
				<div className="flex-1">
					<h2 className="text-primary  w-fit after:content-[''] after:border-2 after:w-1/3 after:border-primary flex flex-col text-xl font-semibold">
						Who we are
					</h2>
					<div className="py-4 pt-6 relative">
						<div className="absolute w-[90%] top-6 h-[50vh] bg-primary/40" />
						<img
							src={whoweare}
							alt="who we are"
							className="h-[50vh] w-[90%] object-center object-cover aspect-video"
						/>
					</div>
					<h3 className="text-primary font-bold text-xl">
						Your partner for the best car deal$
					</h3>
				</div>
				<div className="flex-1">
					<h2 className="text-primary  w-fit after:content-[''] after:border-2 after:w-1/3 after:border-primary flex flex-col text-xl font-semibold">
						What we do
					</h2>
					<div className="py-4 pr-4">
						<p className="text-primary">
							We are involved in the selling of cars. We partner with
							individuals who import cars for sale, put these cars up for
							bidding, and sell them to the highest bidder. We ensure customers'
							satisfication by promoting only high quality goods, and by making
							sure our partners are legit and reliable. We help shopers find
							great car deals and connect with top rated dealers. Bid 4 Wheels
							offers a pre-owned inventory that ranges from economic cars to
							luxury vehicles at affordable price with updates on the latest
							cars available. We strive to find you the vehicle you've been
							looking for, and make the process easy for you. We help our
							partners make quick sales with little effort by puttin up their
							products for automatic bidding, hence saving them the stress
						</p>
					</div>
				</div>
			</section>
			<section className="flex flex-row px-8 py-8 justify-between items-start">
				<div className="flex-1">
					<h2 className="text-primary font-semibold text-2xl pb-6">Rating</h2>
					<div className="flex flex-row items-center justify-between w-[60%] pb-3">
						{Array.from({ length: 4 }, (item, index) => index).map((_, i) => (
							<BsStarFill className="text-yellow-500 text-3xl" key={i} />
						))}
						<BsStarHalf className="text-yellow-500 text-3xl" />
					</div>
					<h4 className="text-primary font-semibold text-sm">
						Overall rating by our trusted customers
					</h4>
				</div>
				<div className="flex-1">
					<div className="mb-8">
						<h2 className="text-primary font-semibold text-2xl mb-4">
							Quality
						</h2>
						<div className="flex flex-row w-[50%]">
							{Array.from({ length: 5 }, (item, index) => index).map((_, i) => (
								<div className="flex-1 mr-[1px] bg-primary h-3" key={i} />
							))}
						</div>
					</div>
					<div className="mb-8">
						<h2 className="text-primary font-semibold text-2xl mb-4">Value</h2>
						<div className="flex flex-row w-[50%]">
							{Array.from({ length: 5 }, (item, index) => index).map((_, i) => (
								<div className="flex-1 mr-[1px] bg-primary h-3" key={i} />
							))}
						</div>
					</div>
					<div className="mb-8">
						<h2 className="text-primary font-semibold text-2xl mb-4">
							Credibility
						</h2>
						<div className="flex flex-row w-[50%]">
							{Array.from({ length: 5 }, (item, index) => index).map((_, i) => (
								<div className="flex-1 mr-[1px] bg-primary h-3" key={i} />
							))}
						</div>
					</div>
				</div>
				<div className="flex-1 mb-8">
					<h2 className="text-primary font-semibold text-2xl pb-4">
						Send Us A Review
					</h2>
					<textarea
						className="input-field mb-4"
						name="review"
						cols={30}
						rows={3}
					></textarea>
					<button className="button block bg-primary border-primary border text-white w-1/2 hover:bg-primary-hover">
						Send
					</button>
				</div>
			</section>
			<section className="bg-primary py-16 px-8">
				<div className="flex items-center justify-between">
					<h1 className="text-4xl w-fit font-bold text-white after:content-[''] after:border-[1px] after:w-1/5 after:border-white flex flex-col">
						Trending Cars
					</h1>
					<div className="flex flex-row w-[7%] justify-between">
						<div>
							<h2 className="text-white font-semibold">Prev</h2>
							<div className="w-full bg-white">
								<MdKeyboardArrowLeft className="text-primary font-bold text-4xl" />
							</div>
						</div>
						<div>
							<h2 className="text-white font-semibold">Next</h2>
							<div className="w-full bg-white">
								<MdKeyboardArrowRight className="text-primary font-bold text-4xl" />
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-wrap [&>*]:min-w-[300px] gap-8 [&>*]:flex-1">
					{products.map((car) => {
						return (
							<Link to={`/product/${car._id}`} state={car}>
								<Car car={car} />
							</Link>
						);
					})}
				</div>
			</section>
			<section className="py-16 px-8 min-h-screen">
				<h2 className="text-primary  w-fit after:content-[''] after:border-2 after:w-1/3 after:border-primary flex flex-col text-4xl font-semibold">
					FAQs
				</h2>
				<div className="flex flex-row py-8 gap-x-10">
					<div className="flex-1 px-8 py-8 shadow-2xl border border-slate-100">
						<div className="p-4 border border-slate-100 shadow-lg">
							<h1 className="text-2xl font-bold text-primary py-4">
								How does the bidding process work?
							</h1>
							<p className="text-primary-light">
								The first person to place a bid on a car automatically becomes
								the highest bidder. Subsequently, any bid on this product must
								be higher than the highest bidder. Supposed you have been
								overtaken on the bidding leaderboard, you can edit your bid to
								stay at the top.
							</p>
						</div>
						<div>
							<div className="flex flex-col gap-y-8 py-8 text-xl font-semibold text-primary">
								{faqs.map((faq) => (
									<Faq title={faq.title} text={faq.text} />
								))}
							</div>
						</div>
					</div>
					<div className="flex-1 px-8 place-self-end">
						<div>
							<h1 className="text-4xl text-primary font-bold my-8">
								Signup for News Letters
							</h1>
							<div className="p-16 max-w-lg shadow-2xl border border-slate-100 bg-slate-50">
								<div>
									<div className="p-16 bg-white shadow-inner flex justify-center items-center">
										<MdEmail className="text-7xl text-primary" />
									</div>
								</div>
								<p className="text-center text-primary my-8">
									Get updates on latest and great car deals
								</p>
								<div className="flex flex-col gap-y-8">
									<input
										type="text"
										className="input-field w-full border-primary-light border-2 shadow shadow-primary-light"
										placeholder="Enter your email"
									/>
									<button className="button w-full text-white bg-primary hover:bg-primary-hover">
										Subscribe
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

const Faq = (props: { title: string; text: string }) => {
	const [show, setShow] = useState(false);
	return (
		<div className="relative">
			<div
				className="flex flex-row justify-between text-xl cursor-pointer"
				onClick={() => {
					setShow((state) => !state);
				}}
			>
				<div>{props.title}</div>
				<div className="px-5 text-3xl">
					{show ? (
						<AiOutlineMinus className="text-3xl font-bold" />
					) : (
						<BiPlusMedical />
					)}
				</div>
			</div>
			{show && (
				<p className="absolute text-sm font-normal py-8 px-4 bg-slate-100 my-2 text-slate-500 z-30 rounded-sm">
					{props.text}
				</p>
			)}
		</div>
	);
};
export default Home;
