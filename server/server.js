const express = require("express");
const mongoose = require("mongoose");
const cors = require("coors");
require("dotenv").config();
const instructorRoutes = require("./routes/instructors.js");
const { instructors } = require("./data/instructors.js");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/instructors", instructorRoutes);

app.get("/", (req, res) => {
	res.send("API Is running");
});

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		console.log("MongoDB connected");
		app.listen(5000, () => console.log("Server running on port 5000"));
	})
	.catch((err) => console.log(err));
