import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Countries from './components/Countries';
import Country from './components/Country';
import Header from './components/Header';

function App() {

  return (
    <>   
        <Header />
        <Routes>
            <Route exact path="/rest-countries" element={<Countries />} />
            <Route path="/countries/:name" element={<Country />} />
        </Routes> 
    </>
  );
}

export default App;
