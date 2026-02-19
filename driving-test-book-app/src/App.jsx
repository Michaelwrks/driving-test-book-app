import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import carPicture from "./assets/l-plates-1.jpg";

function App() {
	return (
		<>
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
			<div className="container">
				<div className="container1">
					<p>
						Driver based in Bishop Stopford who is willing to take on new drivers.
						Offering good prices for tests with no cancellation fee if the test is
						cancelled due to no transport means.
					</p>
				</div>
				<div className="container2">
					<p>
						New instructor in the Essex area. Limited availability but offering
						competitive prices. If you are interested please contact me on
						07463456789. BOOK ASAP!
					</p>
				</div>
				<div className="container3">
					{" "}
					<p>
						Driver based in the Beckton area with a history of pass rates. Quick and
						effective with the bookings and also accepting installment payments.
					</p>
				</div>
			</div>
			<br />
			<br />
			<br />
			<br />
			<br />
			<div className="outer-container2">
				<div className="container1">
					<p>
						Driver based in Bishop Stopford who is willing to take on new drivers.
						Offering good prices for tests with no cancellation fee if the test is
						cancelled due to no transport means.
					</p>
				</div>
				<div className="container2">
					<p>
						New instructor in the Essex area. Limited availability but offering
						competitive prices. If you are interested please contact me on
						07463456789. BOOK ASAP!
					</p>
				</div>
				<div className="container3">
					{" "}
					<p>
						Driver based in the Beckton area with a history of pass rates. Quick and
						effective with the bookings and also accepting installment payments.
					</p>
				</div>
				<div className="container1">
					<p>
						Driver based in Bishop Stopford who is willing to take on new drivers.
						Offering good prices for tests with no cancellation fee if the test is
						cancelled due to no transport means.
					</p>
				</div>
				<div className="container2">
					<p>
						New instructor in the Essex area. Limited availability but offering
						competitive prices. If you are interested please contact me on
						07463456789. BOOK ASAP!
					</p>
				</div>
				<div className="container3">
					{" "}
					<p>
						Driver based in the Beckton area with a history of pass rates. Quick and
						effective with the bookings and also accepting installment payments.
					</p>
				</div>
			</div>
		</>
	);
}

export default App;
