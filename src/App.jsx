import Home from './homepage'
import Secondary from './secondarypage'
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";


function App() {
  const [isLogged,setLog]=useState(false)
  const handleSubmit=(input)=>{
    if (input.name && input.phone && input.email) {
      console.log(input)
      setLog(true)
      localStorage.setItem("name",input.name)
      localStorage.setItem("phone",input.phone)
      localStorage.setItem("email",input.email)
    }
  }
  const handleLogOut=()=>{
    setLog(false)
    localStorage.clear()
  }

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={ <Home handleSubmit={handleSubmit} />} />
      {isLogged?
      <Route path="/secondary" element={<Secondary handleLogOut={handleLogOut} />} />
      : 
      <Route path="/secondary" element={ <Home handleSubmit={handleSubmit} />} />
      }
    </Routes>
  </BrowserRouter>
  )
}

export default App
