const express = require('express')
const movieController = require('./movie.controller')
const router = express.Router()

router.get('/', movieController.getMovies)
router.get('/:omdbID', movieController.getById)

module.exports = router