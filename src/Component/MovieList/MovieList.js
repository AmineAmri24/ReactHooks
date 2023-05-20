import React from 'react';
import MovieCard from '../MovieCard/MovieCard';

const MovieList = ({movies, inputSearch, rating}) => {

  return (
    <div>
      <h2>Movie list</h2>
      <div className='cards'>
      {movies
      
      .filter((movie) => movie.title.toUpperCase().includes(inputSearch.toUpperCase())&& movie.rate >= rating) 
      
      .map((movie) =>(
      <MovieCard movie={movie} key={movie.id}/>
      ))} 
      </div> 
    </div>
  );
};

export default MovieList;
