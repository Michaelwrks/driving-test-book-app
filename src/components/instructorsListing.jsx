import "./Listing.css";
import { Link, useParams } from "react-router-dom";
import { instructors } from "../data/instructors";

export const InstructorsListing = () => {
	const { instructorId } = useParams();
	const instructor = instructors.find(
		(item) => item.id === Number.parseInt(instructorId, 10),
	);

	if (!instructor) {
		return (
			<div className="booking-page">
				<h1>Instructor not found</h1>
				<p>The booking page you requested does not exist.</p>
				<Link className="back-link" to="/">
					Back to homepage
				</Link>
			</div>
		);
	}

	return (
		<div className="booking-page">
			<Link className="back-link" to="/">
				Back to homepage
			</Link>

			<header className="booking-header">
				<h1>Book a test with {instructor.name}</h1>
				<p>{instructor.description}</p>
			</header>

			<section className="booking-summary">
				<div>
					<h2>Instructor details</h2>
					<p>
						<strong>Area:</strong> {instructor.area}
					</p>
					<p>
						<strong>Location:</strong> {instructor.location}
					</p>
					<p>
						<strong>Phone:</strong> {instructor.phone}
					</p>
					<p>
						<strong>Price:</strong> {instructor.price}
					</p>
				</div>
			</section>

			<section>
				<h2>Available slots</h2>
				<div className="availability-grid">
					{Object.entries(instructor.availability).map(([date, times]) => (
						<article key={date} className="availability-card">
							<h3>{date}</h3>
							<div className="time-list">
								{times.map((time) => (
									<button key={time} type="button" className="time-slot">
										{time}
									</button>
								))}
							</div>
						</article>
					))}
				</div>
			</section>
		</div>
	);
};

export default InstructorsListing;
