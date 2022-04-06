import { BASE_URL } from './index'
import axios from 'axios'

export const GetMovies = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}`)
    console.log(res, 'movies')
    return res.data.results
  } catch (error) {
    throw error
  }
}

export const GetMovieDetails = async (id) => {
  try {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=1e1954c28c400fa83b322b6e060a1faf&language=en-US`)
    console.log(res, 'details object')
    return res.data
  } catch (error) {
    throw error
  }
}