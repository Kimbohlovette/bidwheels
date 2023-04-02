import React from 'react';

const Footer = () => {
	return (
		<div className="flex flex-col sm:flex-row justify-between divide-x-2 py-16 px-5 bg-gray-400 [&>*]:flex-1 [&>*]:flex [&>*]:flex-row [&>*]:justify-center [&>*]:items-start">
			<div>
				<div>
					<h1>Logo</h1>
					<ul>
						<li>Home</li>
						<li>Shop</li>
					</ul>
				</div>
			</div>
			<div>
				<div>
					<h1>Our Customer Service</h1>
					<ul>
						<li>Terms and Conditions</li>
						<li>About Us</li>
						<li>Contact</li>
						<li>FAQs</li>
					</ul>
				</div>
			</div>
			<div>
				<div>
					<h1>Our Customer Service</h1>
					<ul className='flex flex-row divide-x-2 gap-2 text-center px-4'>
						<li>fa</li>
						<li>wa</li>
						<li>inst</li>
						<li>in</li>
						<li>pin</li>
						<li>twi</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
