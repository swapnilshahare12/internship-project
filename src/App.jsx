// import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar';
import Details from './components/Details'

function App() {
 

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Card />}></Route>
          <Route path='/details/:index' element={<Details />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App
