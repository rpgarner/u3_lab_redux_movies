import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import Movies from './components/Movies'
import MovieDetails from './components/MovieDetails'


const App = () => {
  
  return (
    <div className="App">
      <h3>Redux Thunk Practice</h3>
      <div className="flex-row">
        <div className="left">
          
        </div>
        <div className="right">
          <Routes>
            <Route path='/movies' element={<Movies />}/>
            <Route path="/movies/:id" element={<MovieDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
