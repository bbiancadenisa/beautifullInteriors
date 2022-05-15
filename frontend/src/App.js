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
import { useEffect, useState } from 'react';


function App() {

  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    const id = localStorage.getItem('id')
    if(id){
        setIsAuth(true)
      }
    else {
      setIsAuth(false)
    }
  },  [])

  return (
    <Router>
      <Header isAuth={isAuth} setIsAuth={setIsAuth} />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login isAuth={isAuth} setIsAuth={setIsAuth} />}/>
        <Route path="/designs" element={<Design />}/>
        <Route path="/category/:category" element={<Category />}/>
      </Routes>
    </Router>
   
  );
}

export default App;
