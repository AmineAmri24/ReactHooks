import React from 'react';
import './App.css';
import MovieList from './Component/MovieList/MovieList';
import {moviesData} from './Component/Data/Data';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FilterByName from './Component/FilterByName/FilterByName';
import FilterByRate from './Component/Rating/Rating';
import AddMovie from './Component/AddMovie/AddMovie';

function App() {
const [movies, setMovies] = useState(moviesData);
const [inputSearch,setInputSearch] = useState("");
const [rating, setRating] = useState(1);
const add = (newMovie) => {
  setMovies([...movies,newMovie]);
};
  return (
    <div className="App">
    <h1>Movie App</h1>
    <AddMovie add={add}/>
    <FilterByRate rating={rating} setRating={setRating} isMovieRating={false}/>
    <FilterByName inputSearch={inputSearch} setInputSearch={setInputSearch} />
    <MovieList movies={movies} inputSearch={inputSearch} rating={rating}/>
    </div>
  );
};

export default App;
