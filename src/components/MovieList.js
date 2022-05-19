import * as React from 'react';
import { getMovies} from '../http/get-movies';
import { Col,Card, CardGroup,Button,Modal  } from 'react-bootstrap';
import MovieModal from './MovieModal';
import 'bootstrap/dist/css/bootstrap.min.css';


const MovieList = () => {
    const[movies,setMovies] = React.useState([]);
    const[model,setModel] = React.useState(false);
    const[tempdata,setTempData] = React.useState([]);

    React.useEffect(() => {
        getMovies().then((res) => setMovies(res.Search));
    });

    const getData = (img,title,year) =>{
        let tempData = [img, title, year];
        setTempData(item => [1, tempData]);
        return setModel(true);
    }

    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const [data, setData] = React.useState('');

    // const setDataOn = () => {
    //     console.log('hrere');
    //    setData("Data is set");
    // }
  

    //console.log(JSON.stringify(movies.Search));

    let mList = (movies || []).map((movies, index) => (
        //Console.log(movies.Array.length);
        <Col sm="2">
        {/* <Card>
            <Card.Img variant="top" src={movies.Poster} />
            <Card.Body>
                <Card.Title>{movies.Title}</Card.Title>
                <Card.Text>
                    Year: {movies.Year}
                </Card.Text>
                 <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card> */}
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={movies.Poster} />
            <Card.Body>
                <Card.Title>{movies.Title}</Card.Title>
                <Button variant="primary" 
                onClick={() => getData(movies.Poster,movies.Title,movies.Year)}>
                 View More</Button>
                  {/* <Button variant="primary" size="lg" active onClick={() => setDataOn()}>
          Primary button
        </Button>{' '} */}
            </Card.Body>
        </Card>
        </Col>
        
        //<img src={movies.Poster} className='movie-poster img-fluid shadow-2-strong' alt='movie' style={{ maxWidth: '20rem' }}/>
    ));

	return (
        <CardGroup>
             {mList}
            {/* {
                model === true ? <MovieModal img={tempdata[1]} title={tempdata[2]} year={tempdata[3]} /> : ''
            } */}
            {/* <MovieModal /> */}
            <Modal show={model} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>tempdata</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        </CardGroup>  
        
  
	);
};


export default MovieList;