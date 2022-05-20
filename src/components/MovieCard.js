import React from "react";
import { Col,Card,Button  } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function MovieCard(props) {
  const { movies } = props;
  return (
       <Col sm="2">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={movies.Poster} />
            <Card.Body>
                <Card.Title>{movies.Title}</Card.Title>
                <Button variant="primary" as={Link} to={`/moviemodal/${movies.imdbID}`} >
                 View More</Button> 
            </Card.Body>
        </Card>
        </Col>
  );
}