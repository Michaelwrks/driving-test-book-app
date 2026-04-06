import carPicture from "../assets/l-plates-1.jpg";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { instructors } from "../data/instructors";

export default function Home() {
	const navigate = useNavigate();

	return (
		<div className="home-page">
			<nav className="top-nav">
				<ul className="nav-links">
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="#available-instructors">Tests</a>
					</li>
					<li>
						<a href="#how-it-works">News</a>
					</li>
					<li>
						<a href="#how-it-works">About</a>
					</li>
				</ul>
			</nav>

			<section className="hero-section">
				<div className="hero-copy">
					<p className="eyebrow">Driving test support</p>
					<h1 className="title">Book a test with the right instructor faster</h1>
					<p className="hero-text">
						Driving test cancellations are hard to catch and even harder to use well
						without a reliable instructor. Browse available instructors, compare areas
						and prices, then move straight to a booking page that shows open slots.
					</p>
					<div className="hero-actions">
						<button
							type="button"
							className="primary-button"
							onClick={() =>
								document
									.getElementById("available-instructors")
									?.scrollIntoView({ behavior: "smooth" })
							}
						>
							View instructors
						</button>
						<a className="secondary-link" href="#how-it-works">
							How it works
						</a>
					</div>
				</div>
				<div className="hero-image-wrap">
					<img className="hero-image" src={carPicture} alt="L plates on a car" />
				</div>
			</section>

			<section className="section-heading">
				<p className="eyebrow">Available now</p>
				<h2>Choose an instructor and move to booking</h2>
			</section>

			<section id="available-instructors" className="outer-container2">
				{instructors.map((instructor) => (
					<article key={instructor.id} className="instructor-card">
						<div className="card-topline">
							<span>{instructor.area}</span>
							<span className="price-tag">{instructor.price}</span>
						</div>
						<h2>{instructor.headline}</h2>
						<p>{instructor.description}</p>
						<p className="card-meta">
							<strong>{instructor.name}</strong> - {instructor.location}
						</p>
						<button
							type="button"
							className="primary-button"
							onClick={() => navigate(`/instructors/${instructor.id}`)}
						>
							Book Test
						</button>
					</article>
				))}
			</section>

			<section id="how-it-works" className="how-it-works">
				<p className="eyebrow">Simple process</p>
				<h2>How it works</h2>
				<div className="steps-grid">
					<article className="step-card">
						<span>01</span>
						<p>Tell us your area, your preferred date, and the kind of support you need.</p>
					</article>
					<article className="step-card">
						<span>02</span>
						<p>Choose an instructor with pricing, location, and availability that fit.</p>
					</article>
					<article className="step-card">
						<span>03</span>
						<p>Open the booking page and lock in a slot before it disappears.</p>
					</article>
				</div>
			</section>
		</div>
	);
}
