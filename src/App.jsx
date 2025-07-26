import { useState } from 'react'
import NutritionAnalyzer from './components/NutritionAnalyzer'
import NutritionHero from './components/NeutriHero'
import { Routes,Route } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <NutritionAnalyzer/> */}
      <Routes>
        <Route path="/" element={<NutritionHero />} />
        <Route path="/analyze" element={<NutritionAnalyzer />} />
      </Routes>
    </>
  )
}

export default App