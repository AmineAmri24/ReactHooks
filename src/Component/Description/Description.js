import React, { UseState, useEffect}   from 'react'
import { useNavigate, useParams} from 'react-router-dom'
import { moviesData } from '../Data/Data'


const Description = () => {

    const params = useParams()
    const [movie, setMovie] = UseState({})

    const navigate = useNavigate()

    useEffect(() => {
      setMovie(moviesData.find((movie) =>movie.id === +params.id))
    }, [params.id]);
    
  return (
    <div>
    <h1>Movie title: {movie.title} </h1>

    <h2>Description: {movie.description} </h2>
    <iframe src={movie.trailer} /> 
    <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  )
}

export default Description