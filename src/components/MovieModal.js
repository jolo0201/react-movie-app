import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getMoviesById } from '../http/get-movies-id';
import { Container, Row, Col, Image, Button, Badge  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieModal = (props) =>{
    let { id } = useParams();
    useEffect(() => {
        console.log(`${id}`);
    }, []);

    const[movieInfo,setMovie] = useState([]);

    useEffect(() => {
        getMoviesById(id).then((res) => setMovie(res));
    }, []);

    //console.log(JSON.stringify(movieInfo));

    return(
        <div>
            <br/>
            <Container>
                <Row>
                    <Col sm={3}>
                    <Image src={movieInfo.Poster} fluid/> 
                    
                    </Col>
                    <Col sm={9}>
                        <Row><h2>{movieInfo.Title}  <Badge bg="secondary">Metascore: {movieInfo.Metascore}</Badge></h2></Row>
                        <Row><h4>{movieInfo.Year}</h4></Row>
                        <Row><h5>{movieInfo.Genre}</h5></Row>
                        <br/>
                        <Row><b>IMDb Rating:</b></Row>
                        <Row><h4>{movieInfo.imdbRating}</h4></Row>
                       
                        <Row><b>Rated:</b></Row>
                        <Row><h4>{movieInfo.Rated}</h4></Row>

                        <Row><b>Released Date:</b></Row>
                        <Row><h4>{movieInfo.Released}</h4></Row>

                        <Row><b>Runtime:</b></Row>
                        <Row><h4>{movieInfo.Runtime}</h4></Row>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col sm={3}>
                        <div className="d-grid gap-2">
                        <Button variant="primary" size="lg">
                            Download
                        </Button>
                        <Button variant="secondary" size="lg">
                            Watch Now
                        </Button>
                        </div>
                    </Col>
                    <Col sm={9}>
                       
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col sm><h4>Plot Summary</h4></Col>
                    <Col sm></Col>
                    <Col sm><h4>Director</h4></Col>
                </Row>
                <Row>
                    <Col sm={8}><p>{movieInfo.Plot}</p></Col>
                    <Col sm={4}><p>{movieInfo.Director}</p></Col>
                </Row>
                <Row>
                    <Col sm={8}></Col>
                    <Col sm={4}><h4>Top Cast</h4></Col>
                </Row>
                <Row>
                    <Col sm={8}></Col>
                    <Col sm={4}><p>{movieInfo.Actors}</p></Col>
                </Row>
            </Container>
        </div>
    )

}

export default MovieModal;