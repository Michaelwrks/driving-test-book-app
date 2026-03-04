import { useState } from "react";
import "./App.css";
import carPicture from "./assets/l-plates-1.jpg";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function App() {
	return (
		<>
			{" "}
			<nav>
				<ul>
					<li>
						<a href="">Home</a>
					</li>
					<li>
						{" "}
						<a href="">Tests</a>
					</li>
					<a href="">News</a>

					<a href="">About</a>
				</ul>
			</nav>
			<h1 className="title"> DT MADE EASY</h1>
			<div className="main-container">
				<p className="read-the-docs">
					DRIVING TEST CANCELLATIONS You need your license now, not in 6 months.{" "}
					<br />
					What if you could get a driving test tomorrow rather than your current
					test? <br />
					With our driving test cancellation service, you can. We help you nail down{" "}
					<br />
					these elusive driving test cancellations so you can take your test as soon
					as you want to.{" "}
				</p>
				<img style={{ width: "390px" }} src={carPicture} alt="" />
			</div>
			<br />
			<br />
			<br />
			<br />
			<div className="container"></div>
			<br />
			<br />
			<br />
			<br />
			<br />
			<div className="outer-container2">
			<Card variant="outlined">ksnwjnn</Card>
				<div className="container1">
					<h1>
						Amazing service with the guy from Bihsop Sropford, fully recommended!
					</h1>
					<p>
						Driver based in Bishop Stopford who is willing to take on new drivers.
						Offering good prices for tests with no cancellation fee if the test is
						cancelled due to no transport means.
					</p>
				</div>
				<div className="container2">
					<h1>
						An eager instructor in the Essex area waiting to get the next driver over
						the line{" "}
					</h1>
					<p>
						New instructor in the Essex area. Limited availability but offering
						competitive prices. If you are interested please contact me on
						07463456789. BOOK ASAP!
					</p>
				</div>
				<div className="container3">
					{" "}
					<h1>
						If you are looking to pass and do it with a top instructor then please
						reach out as soon as possibe{" "}
					</h1>
					<p>
						Driver based in the Beckton area with a history of pass rates. Quick and
						effective with the bookings and also accepting installment payments.
					</p>
				</div>
				<div className="container1">
					<h1>
						Instructor with years of experience getting drivers over the finish line.
					</h1>
					<p>
						Driver based in North Lonodon. if you want to pass first time then be sure
						to contact me on 07463456789.{" "}
					</p>
				</div>
				<div className="container2">
					<h1>
						Experienced instructor not wasting time to book tests for new drivers and
						eager to make a difference for them{" "}
					</h1>
					<p>
						located in the Luton area, I am offering competitive prices and a history
						of pass rates. If you are interested please contact me on 07463456789.
						BOOK ASAP!
					</p>
				</div>
				<div className="container3">
					{" "}
					<h1>Serious record of passes and guarenteed first time pass rate </h1>
					<p>
						Instructor based in East London, ready to get you over the line and
						successfully pass your test. Quick and effective with the bookings and
						also accepting installment payments. Reach out for a quick call!
						07463456789
					</p>
				</div>
			</div>
		</>
	);
}

export default App;
