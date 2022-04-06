import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { LoadMovieDetails } from '../store/actions/MovieActions'
import { POSTER_PATH } from '../services'
import { useNavigate } from 'react-router-dom'

const mapStateToProps = ({ detailState }) => {
  return { detailState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDetails: (id) => dispatch(LoadMovieDetails(id))
  }
}

const MovieDetails = (props) => {
  let { id } = useParams()

  let navigate = useNavigate()

  useEffect(() => {
    props.fetchDetails(id)
  },[id])

  return (
    <div className='movieDetail'>

        <h1>{props.detailState.details.title}</h1>
        <h3>{props.detailState.details.tagline}</h3>
        <p>{props.detailState.details.overview}</p>
        <button onClick={() => navigate("/movies")}>Back</button>
        <img className='poster' src={`${POSTER_PATH}${props.detailState.details.poster_path}`} alt='poster'></img>
    </div>
     
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)