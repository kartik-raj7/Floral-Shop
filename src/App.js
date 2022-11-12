import './App.css';
import Homepage from './pages/Homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Products from './pages/Products';
import Track from './pages/Track';
import Blog from './pages/Blog';

function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route exact path='/' element={<Homepage/>} />
      <Route exact path='/Home' element={<Homepage/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/track' element={<Track/>} />
      <Route path='/blog' element={<Blog/>} />
    </Routes>
  </Router>
  </>
  );
}

export default App;
