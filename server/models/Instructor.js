const mongoose = require("mongoose");

const instructorSchema = new mongoose.Schema({
	name: String,
	area: String,
	location: String,
	phone: String,
	price: String,
	bio: String,
});

module.expors = mongoose.Model("Instructor", instructorSchema);

export default Instructor;
