const router = require("express").Router();
const MovieController = require("../controllers/movieController");

// Retorna todos os filmes
router.get("/", MovieController.getAllMovie);

// Retorna um filme
router.get("/:index", MovieController.getOneMovie);

// Criar um novo filme
router.post("/", MovieController.createMovie);

// Atualizar um filme
router.put("/:index", MovieController.updateMovie);

// Excluir um filme
router.delete("/:index", MovieController.deleteMovie);

module.exports = router;
