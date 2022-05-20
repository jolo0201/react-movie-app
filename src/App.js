import React, {useState,useEffect}from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponents from './components/NavbarComponents';
import {  Routes, Route } from "react-router-dom";
import MovieList from './components/MovieList';
import MovieModal from './components/MovieModal';
import SearchBar from './components/SearchBar';
import GetMovies from './http/GetMovies'

const App = () =>  {

  return (
    <div className="App">
       <div>
          <Routes>
            <Route path="/" element={<NavbarComponents />}>
              <Route index element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/moviemodal/:id" element={<MovieModal />} />
            </Route>
          </Routes>
        </div>
    </div>
  );
}


function Home() {
  const[state,setState] = useState({
    results : []
  });


  const onSearch = async (text) => {
    const results = await GetMovies.get("/", {
      params: { s: text, i:"tt2250912", apiKey: "c0ad6b8f" },
    });

    setState(prevState => {
      return { ...prevState, results: results }
    })
  };

  return(
    <div className='container-fluid movie-app '>
      <br/>

      <div className='row'>
      <div class="col-4 "></div>
        <div class="col-4">
        <h3>Welcome to Movie Lister</h3>
        <h4>A React App with Bootstrap Framework</h4>
        </div>
        <div class="col-4"></div>
      </div>
      <br/>
      <div className='row'>
        <div  className='col-4'></div>
        <div  className='col-4'>
          <SearchBar onSearch={onSearch}/>
        </div>
        <div  className='col-4'></div>
      </div>
      <div className='p-4'>
        <MovieList results={state.results} />
      </div>
		</div>
  );
}



function About() {
  return(
    <div>
      <h3>About Page</h3>
    </div>
  );
}



export default App;
