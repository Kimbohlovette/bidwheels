import React from 'react';
const bgImage = require('../assets/hero-bg-image1.jpg');
const Home = () => {
	return (
		<div className="min-h-screen">
			<section
				className="hero h-[70vh] flex items-center object-center object-cover"
				style={{ backgroundImage: `url(${bgImage})`, objectPosition: 'center', objectFit: 'cover', height: '100%'}}
			>
				<div className="w-full flex flex-col items-center sm:flex-row">
					<div className="caption flex-1">
						<h1 className="text-5xl font-bold">
							Welcome Iknite Space
						</h1>
					</div>
					<div className="action-card flex-1 py-16 px-8 text-white bg-primary/60">
						<p>
							Shop the latest iPhone models and accessroies, Save
							with Apple Trade-In, carrier offers, and flexible
							monthly payment options. Get expert help today.
						</p>
						<p>
							Shop the latest iPhone models and accessroies, Save
							with Apple Trade-In, carrier offers, and flexible
							monthly payment options. Get expert help today.
						</p>
						<button className="button w-48 text-primary bg-white border mt-8">
							BUY
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
