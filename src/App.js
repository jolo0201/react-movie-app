import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponents from './components/NavbarComponents';
import {  Routes, Route } from "react-router-dom";
import MovieList from './components/MovieList';



const App = () =>  {
  

  return (
    <div className="App">
       <div>
          <Routes>
            <Route path="/" element={<NavbarComponents />}>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="trending" element={<Trending />} />
              <Route path="popular" element={<Popular />} />
              <Route path="latest" element={<Latest />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </div>
        {/* <div className='content'>
          This is a content
        </div> */}
    </div>
  );
}

function Home() {
  return(
    <div className='container-fluid movie-app'>
      <h3>Featured Movies</h3>
      <div className='p-4'>
        <MovieList />
      </div>
		</div>


  );
}

function Trending() {
  return(
    <div>
      <h1>Trending Page</h1>
    </div>
  );
}


function Popular() {
  return(
    <div>
      <h1>Popular Page</h1>
    </div>
  );
}

function Latest() {
  return(
    <div>
      <h1>Latest Page</h1>
    </div>
  );
}

function About() {
  return(
    <div>
      <h1>About Page</h1>
    </div>
  );
}

function Contact() {
  return(
    <div>
      <h1>Contact Page</h1>
    </div>
  );
}


export default App;
