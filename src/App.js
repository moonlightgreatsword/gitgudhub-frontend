import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom/client'
import Search from './Search'
import { Route, Routes, Link, Router } from 'react-router-dom';
import NavBar from './NavBar'
import Selected from './Selected'


// linking to backend here vvvv
let baseURL = "";

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  baseURL = "your heroku backend url here";
}

function App() {

  return (
    <div className="App">
      <div id="root">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Search />} />
          <Route path='/selected/:name' element={<Selected />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;