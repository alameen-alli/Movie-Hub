import React from "react";
import './App.css'
import { useEffect } from "react";
import SearchIcon from './search.svg'

// 17915b2d
// http://www.omdbapi.com/?i=tt3896198&apikey=17915b2d

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=17915b2d";

const App = () => {
  const searchMovies = async(title) => {
    const response = await fetch (`${API_URL}&s=${title}`);
    const data = await response.json();

    // console.log(data.Search);
  };

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return (
    <div className="app">
        <h1>MovieHub</h1>

        <div className="search">
            <input 
                placeholder="Search for movies..."
                value="Superman"
                onChange={() => {}}
            />
            <img
                src={SearchIcon}
                alt="search"
                onChange={() => {}}
            />
        </div>

        <div className="container">

        </div>
    </div>
  );
};

export default App;
  