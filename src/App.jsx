import { useState } from 'react'
import DeMar from './components/DeMar'
import Asiatico from './components/Asiatico'
import CRapida from './components/CRapida'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div className='App'>
        <DeMar/>

        <Asiatico/>

        <CRapida/>

      </div>
  )
}

export default App
