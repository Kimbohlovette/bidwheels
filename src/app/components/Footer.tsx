import React from 'react';
import { BsFacebook, BsLinkedin, BsPinterest, BsTwitter } from 'react-icons/bs';
import { ImInstagram } from 'react-icons/im';
import { RiWhatsappFill } from 'react-icons/ri';
const Footer = () => {
	const footerLogo = require('../assets/logo.png');
	return (
		<div>
			<div className="flex flex-col sm:flex-row justify-between divide-x-2 py-16 px-5 bg-white [&>*]:flex-1 [&>*]:flex [&>*]:flex-row [&>*]:justify-center [&>*]:items-start">
				<div>
					<div>
						<img
							src={footerLogo}
							className="h-24 w-auto object-center object-contain aspect-video"
							alt=""
						/>
						<ul className="flex flex-col gap-y-4 text-primary font-semibold mt-8">
							<li>Home</li>
							<li>Shop</li>
						</ul>
					</div>
				</div>
				<div>
					<div>
						<h1 className="text-primary text-2xl font-bold mb-8">
							Our Customer Service
						</h1>
						<ul className="flex flex-col gap-y-4 text-primary font-semibold">
							<li>Terms and Conditions</li>
							<li>About Us</li>
							<li>Contact</li>
							<li>FAQs</li>
						</ul>
					</div>
				</div>
				<div>
					<div>
						<h1 className="text-primary text-2xl font-bold mb-8">
							Our Customer Service
						</h1>
						<ul className="flex flex-row divide-x-2 gap-2 text-center px-4 text-primary text-3xl [&>*]:flex-1 [&>*]:flex [&>*]:flex-row [&>*]:justify-center [&>*]:items-start [&>*]:px-2">
							<li>
								<BsFacebook />
							</li>
							<li>
								<RiWhatsappFill />
							</li>
							<li>
								<ImInstagram />
							</li>
							<li>
								<BsLinkedin />
							</li>
							<li>
								<BsPinterest />
							</li>
							<li>
								<BsTwitter />
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="text-center text-lg font-semibold text-slate-100 py-8 bg-primary">
				&copy; Bid4Wheels. All rights reserved.
			</div>
		</div>
	);
};

export default Footer;
