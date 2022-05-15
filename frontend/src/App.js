import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login';
import Home from './components/Home/Home'
import Product from './components/Product/Product';
import Design from './components/Designs/Design';
import Category from './components/Category/Category';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/designs" element={<Design />}/>
        <Route path="/category/:category" element={<Category />}/>
      </Routes>
    </Router>
   
  );
}

export default App;
