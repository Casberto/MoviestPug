const MovieModel = require("../models/movieModel");

exports.getAllMovie = async (req, res) => {
  const movie = await MovieModel.findAll();
  return res.status(200).json(movie);
};

exports.getOneMovie = async (req, res) => {
  const {index} = req.params;
  const movie = await MovieModel.findByPk(index);
  if (movie) {
    return res.status(200).json(movie);
  }
  return res.status(404).json();
};

exports.createMovie = async (req, res) => {
  const {
    title,
    description,
    director,
    actor,
    rating,
    genre,
    releaseDate,
    posterUrl,
  } = req.body;
  const movie = await MovieModel.create({
    title,
    description,
    director,
    actor,
    rating,
    genre,
    releaseDate,
    posterUrl,
  });

  return res.status(201).json({status: "success", data: movie});
};

exports.updateMovie = async (req, res) => {
  const {index} = req.params;
  const {
    title,
    description,
    director,
    actor,
    rating,
    genre,
    releaseDate,
    posterUrl,
  } = req.body;
  const movie = await MovieModel.findByPk(index);

  movie.title = title;
  movie.description = description;
  movie.director = director;
  movie.actor = actor;
  movie.rating = rating;
  movie.genre = genre;
  movie.releaseDate = releaseDate;
  movie.posterUrl = posterUrl;

  await movie.save();
  return res.status(200).json({status: "success", data: movie});
};

exports.deleteMovie = async (req, res) => {
  const {index} = req.params;
  const movie = await MovieModel.findByPk(index);
  if (!movie)
    res.status(404).json({
      status: "fail",
      message: "Identificador inválido, tente novamente!",
    });
  await movie.destroy();
  return res.status(204).json({status: "success", data: {}});
};
