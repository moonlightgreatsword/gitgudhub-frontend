import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom/client'
import Nav from './Nav'
import Search from './Search'

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
        <Nav />
        <Search />
      </div>
    </div>
  );
}

export default App;