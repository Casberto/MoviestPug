const router = require("express").Router();
const MovieModel = require("../models/movieModel");

router.get("/", async (req, res, next) => {
  let movies = {};
  try {
    movies = (await MovieModel.findAll()).splice(0, 10);
  } catch (err) {
    console.log("Error: " + err);
  }
  res.render("movieTable", { movies });
});

router.get("/registerMovie", async (req, res, next) => {
  res.render("addMovie");
});

module.exports = router;
