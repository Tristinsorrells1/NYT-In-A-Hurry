import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from "./Home/Home"
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <main>
        <Home />
      </main>
     
    </React.StrictMode>,
  </BrowserRouter>
)
