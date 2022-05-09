import * as React from 'react';
import { getMovies} from '../http/get-movies';
import { Col,Card, CardGroup  } from 'react-bootstrap';

const MovieList = () => {
    const[movies,setMovies] = React.useState([]);

    React.useEffect(() => {
        getMovies().then((res) => setMovies(res.Search));
    });

    //console.log(JSON.stringify(movies.Search));

    let mList = (movies || []).map((movies, index) => (
        //Console.log(movies.Array.length);
        <Col sm="2">
        <Card>
            <Card.Img variant="top" src={movies.Poster} />
            <Card.Body>
            <Card.Title>{movies.Title}</Card.Title>
            <Card.Text>
                Year: {movies.Year}
            </Card.Text>
            </Card.Body>
        </Card>
        </Col>
        
        //<img src={movies.Poster} className='movie-poster img-fluid shadow-2-strong' alt='movie' style={{ maxWidth: '20rem' }}/>
    ));

	return (
        <CardGroup>
             {mList}
        </CardGroup>  
        
	);
};

export default MovieList;