import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import ArrowUp from './components/ArrowUp'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>

      </Routes>
      <ArrowUp/>
      
      
    </div>
  )
}

export default App
