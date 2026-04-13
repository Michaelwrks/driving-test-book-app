import Instructor from "../models/Instructor";

const express = require("express");
const router = express.Router();

const {instructors} = require("../data/instructors")

router.get("/", async (req, res) => {
res.json(instructors)
})


module.exports = router