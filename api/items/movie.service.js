const logger = require('../../services/logger.service')
const axios = require('axios').default
const { OMDB_KEY } = process.env
const BASE_URL = `https://www.omdbapi.com/?apikey=${OMDB_KEY}&`

async function query(searchTerm) {
    try {
        const movies = await axios.get(`${BASE_URL}s=${searchTerm}`).then(res => res.data)
        if (movies.Error) throw new Error(movies.Error)
        return movies
    } catch (error) {
        throw error
    }
}

async function getById(omdbID) {
    try {
        const movie = await axios.get(`${BASE_URL}&i=${omdbID}`).then(res => res.data)
        if (movie.Error) throw new Error('No movie found')
        const { Title, Year, Rated, Released, Runtime, Genre, Director, Writer, Actors, Plot, Language, Country, Awards, Poster, imdbRating, imdbVotes, Production, Website, Ratings, Metascore } = movie
        return {
            title: Title,
            year: Year,
            rated: Rated,
            released: Released,
            runtime: Runtime,
            genre: Genre,
            director: Director,
            writer: Writer,
            actors: Actors,
            plot: Plot,
            language: Language,
            country: Country,
            awards: Awards,
            poster: Poster,
            imdbRating,
            imdbVotes,
            production: Production,
            website: Website,
            ratings: Ratings,
            metascore: Metascore
        }
    } catch (error) {
        throw error
    }
}


module.exports = {
    query,
    getById
}