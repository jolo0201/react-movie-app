import React from "react";
import { Col,Card,Button  } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function MovieCard(props) {
  const { movies } = props;
  return (
       <Col sm="3">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={movies.Poster} />

            <Card.Body>
                <Card.Title>{movies.Title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{movies.Year}</Card.Subtitle>
                <div className="d-grid gap-2">
                <Button variant="primary" size="sm" as={Link} to={`/moviemodal/${movies.imdbID}`} >
                 View</Button> 
                </div>

            </Card.Body>
        </Card>
        </Col>
  );
}