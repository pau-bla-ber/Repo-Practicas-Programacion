import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Fondo from './components/Fondo'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="relative min-h-screen">
      <Fondo />
      <Navbar />
      <Header />
      <Hero />
    </div>


  )
}

export default App
