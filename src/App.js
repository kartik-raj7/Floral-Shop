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

function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route exact path='/' element={<Homepage/>} />
      <Route exact path='/Home' element={<Homepage/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>
  </Router>
  </>
  );
}

export default App;
