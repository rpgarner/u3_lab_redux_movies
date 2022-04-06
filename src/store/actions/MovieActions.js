import {
    GetMovieDetails,
    GetMovies
  } from '../../services/MovieService'
  import { GET_MOVIES, GET_DETAILS } from '../types'
  
  export const LoadMovies = () => {
  
    return async (dispatch) => {
      try {
        const movies = await GetMovies()
        
        dispatch({
          type: GET_MOVIES,
          payload: movies
        })
      } catch (error) {
        throw error
      }
    }
  }
  
  export const LoadMovieDetails = (id) => {
  console.log(id, 'this is the movie id')
    return async (dispatch) => {
      try {
        console.log(id, 'id details')
        const details = await GetMovieDetails(id)
       
        dispatch({
          type: GET_DETAILS,
          payload: details
        })
      } catch (error) {
        throw error
      }
    }
  }