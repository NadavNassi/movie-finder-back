const movieService = require('./movie.service')
const logger = require('../../services/logger.service')

async function getMovies(req, res) {
    try {
        const { q } = req.query
        const movies = await movieService.query(q)
        res.send(movies.Search)
    } catch (err) {
        logger.error('Failed to get items', err)
        res.status(404).send({ err })
    }
}

async function getById(req, res) {
    try {
        const { omdbID } = req.params
        const movie = await movieService.getById(omdbID)
        res.send(movie)
    } catch (error) {
        logger.error(error)
        res.status(404).send({ err: 'Movie not found' })
    }
}



module.exports = {
    getMovies,
    getById
}