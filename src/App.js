import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom/client'
import Nav from './Nav'
import Search from './Search'
import { Route, Routes, Link, Router } from 'react-router-dom';
import NavBar from './NavBar'
import Selected from './Selected'
import ReviewedGallery from './Reviewed'
import ReviewedGame from './ReviewedGame'


// linking to backend here vvvv
let baseURL = "";

if (process.env.NODE_ENV === "development") {
  // baseURL = "http://localhost:3003";
  baseURL = 'http://localhost:3003'
} else {
  baseURL = process.env.REACT_APP_BACKEND_URL;
}

function App() {

  return (
    <div className="App">
      <div id="root">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Search />} />
          <Route path='/selected/:id' element={<Selected />} />
          <Route path='/reviewed' element={<ReviewedGallery />} />
          <Route path='/reviewed/:id' element={<ReviewedGame />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;