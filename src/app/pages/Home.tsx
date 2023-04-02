import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import Car from "../components/Car";

const whoweare = require("../assets/whoweare.png");

const Home = () => {
	const cars = [
		{
			image: require("../assets/m23.jpeg"),
			name: "2023 Mini Coper",
			description:
				"The iconic mini coper has grown both larger and more advanced over the years, but it's still a small, agile car, with very attractive styling for 2023",
		},
		{
			image: require("../assets/t1.jpeg"),
			name: "2023 Toyota Bz4X Review",
			description:
				"Toyota finally enters the Ev game with a small crossover aimed at the heart of the market",
		},
		{
			image: require("../assets/b1.jpeg"),
			name: "Bentley Bentayga",
			description:
				"This is a mid-size luxury crossover SUV produced by Bentley Motors since the late 2015s",
		},
		{
			image: require("../assets/m1.jpeg"),
			name: "Mercedez-Bend",
			description:
				"The Mercedes-Benz CIS-class is a form-first art piece that just so happens to provide the practicality of a chic four-door Sedan. View 2023 CIs",
		},
	];
	return (
		<div className="min-h-screen">
			<section></section>
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
								<div className="flex-1 mr-[1px] bg-primary h-3" />
							))}
						</div>
					</div>
					<div className="mb-8">
						<h2 className="text-primary font-semibold text-2xl mb-4">Value</h2>
						<div className="flex flex-row w-[50%]">
							{Array.from({ length: 5 }, (item, index) => index).map((_, i) => (
								<div className="flex-1 mr-[1px] bg-primary h-3" />
							))}
						</div>
					</div>
					<div className="mb-8">
						<h2 className="text-primary font-semibold text-2xl mb-4">
							Credibility
						</h2>
						<div className="flex flex-row w-[50%]">
							{Array.from({ length: 5 }, (item, index) => index).map((_, i) => (
								<div className="flex-1 mr-[1px] bg-primary h-3" />
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
				<div className="flex flex-row flex-wrap justify-center gap-16 [&>*]:flex-1">
					{
						cars.map((car) => {
							console.log('car: ', car)
							return <Car car={car} />
						})
					}
				</div>
			</section>
			<section></section>
		</div>
	);
};

export default Home;
