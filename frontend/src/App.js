import React from 'react'
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom'
import Base from './pages/Base'

const App = () => {
  return (
    <div>

    <BrowserRouter>
      <Routes>
        <Route path = "/*" element = {<Base />} />
      </Routes>
    </BrowserRouter>
  </div>
  )  
}

export default App
