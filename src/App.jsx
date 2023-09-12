import Home from "./components/Home"
import Puppies from "./components/Puppies"
import Pup from "./components/Pup"
import Nav from "./components/Nav"
import { Route, Routes } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import './App.css'

function App() {
  const [puppies, setPuppies] = useState([])

  useEffect(() => {
   const puppySnatcher = async () => {
       const {data} = await axios.get('https://fsa-puppy-bowl.herokuapp.com/api/2307-FTB-ET-WEB-FT/players')
       setPuppies(data.data.players)
   }
   puppySnatcher()
  }, [])


  return (
    <>
      <Nav></Nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/puppies" element={<Puppies puppies={puppies}/>} />
        <Route path="/puppies/:id" element={<Pup puppies={puppies}/>} />
      </Routes>
    </>
  )
}

export default App
