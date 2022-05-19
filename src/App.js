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
              <Route path="about" element={<About />} />
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

function About() {
  return(
    <div>
      <h3>About Page</h3>
    </div>
  );
}




export default App;
