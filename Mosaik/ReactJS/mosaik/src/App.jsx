
import React from 'react';
import {
  BrowserRouter as Router,
  useRoutes
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Users from './pages/Users';
import Store from './pages/Store';
import ProductDetail from './pages/ProductDetails';
import TopBar from './components/TopBar';


import './App.sass';

const AppRoutes = () =>{
    let routes = useRoutes([
      { path : "/", element : <Home/>},
      { path : "/users", element : <Users/>},
      { path : "/store", element : <Store/>},
      { path : "/store/product-details/:id", element : <ProductDetail/>}
    ]);
    return routes;
} 
  

function App() {
  return (
    <Router>
      <TopBar />
      <NavBar name="Mosaik"/>
      <AppRoutes />
    </Router>
  )
}

export default App;
