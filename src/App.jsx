import { useState } from 'react'
import DeMar from './components/DeMar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Asiatico from './components/Asiatico'
import CRapida from './components/CRapida'
import Home from './components/Home';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/comida-asiática' element={<Asiatico />} />
          <Route path='/comida-rápida' element={<CRapida />} />
          <Route path='/comida-de-mar' element={<DeMar />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
