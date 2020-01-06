import React from 'react'
import Routes from "./Routes"
import Navbar from "./Components/Layout/Navbar"
import Footer from "./Components/Layout/Footer"
// import styles from "./App.css"

export default function App() {
  return (
    <div>
      <Navbar/>
      <Routes/>
      <Footer/>
    </div>
  )
}

