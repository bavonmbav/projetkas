import './App.css';
import './assets/styles/tabler.css';
import  './assets/styles/extra.css';
import React from 'react';
import Pharmacie from './pages/Pharmacie';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
        <Pharmacie/>
    </BrowserRouter>
       
  );
}



export default App;
