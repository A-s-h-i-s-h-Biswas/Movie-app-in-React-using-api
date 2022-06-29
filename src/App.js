import React from 'react';
import { useEffect,useState } from "react";
import './App.css';
import MovieCard from './MovieCard.jsx';
import MovieSearch from './MovieSearch.jsx';
import Footer from "./Footer"



const API_URL = "http://www.omdbapi.com?apikey=e23ea4e0";

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState();

  /////////////////////////////  Setup for Getting Data from API ////////////////////////////
  const searchMovie = async (movieName) => {
    const response = await fetch(`${API_URL} &s=${movieName}`);
    const movieData = await response.json();
    setMovies(movieData.Search);
  }
  
  useEffect(() => {
    searchMovie("Avengers");
  }, []);
  
  
  /////////////////// Know the Movie data features //////////////
  // const movie1 = {
  //   Poster: "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg",
  //   // Poster:"N/A",
  //   Title: "Italian Spiderman",
  //   Type: "movie",
  //   Year: "2007",
  //   imdbID: "tt2705436"
  // };

  

  return (
    <div className="app">
      <h1>Movie Lover</h1>
      <MovieSearch onSearch={searchMovie} />
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => {
            return <MovieCard props={movie} />;
          })}
        </div>
      ) : (
        <div className="empty">
          <h2>
            <h1>4o4!</h1> No Movies Found
          </h2>
        </div>
      )}
      <Footer/>
    </div>
  );
}

export default App;
