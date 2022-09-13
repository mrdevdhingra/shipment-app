
import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';

function App() {
  return (
    <>
      <Router>
        <div className='container'>

        
        
          <Sidebar />
        
        

       
        
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/reports' element={<Reports/>} />
          <Route path='/products' element={<Products/>} />
        </Routes>
        </div>
        
      </Router>
    </>
  );
}

export default App;