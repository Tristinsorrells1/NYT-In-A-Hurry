import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from "./Home/Home"
import Details from "./Details/Details"
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from "react-router"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Details />} />
        </Routes>
      </main>
     
    </React.StrictMode>,
  </BrowserRouter>
)
