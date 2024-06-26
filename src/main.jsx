import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Faqs from './components/Faqs.jsx'
import Faq from './components/Faq.jsx'
import ErrorComponent from './components/ErrorComponent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} >
          <Route path='home' element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='faqs/:id' element={<Faqs/>} />
        </Route>
        <Route path='*' element={<ErrorComponent/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
