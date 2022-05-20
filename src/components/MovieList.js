import React, {useEffect,useState} from 'react';
import { CardGroup  } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import MovieCard from './MovieCard';

const MovieList = ({ results }) => {
    let data = [];
    if (results.data) {
      data = results.data.Search || [];
    }
	return (
        <CardGroup>
             {data.map((item) => (
              <MovieCard key={item.imdbID} movies={item} />
            ))}
        <Outlet />
        </CardGroup>  
	);
};


export default MovieList;