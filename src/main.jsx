import React from 'react'
import ReactDOM from 'react-dom/client'

import Cursor from './components/Cursor'
import Canvas from './components/Canvas'
import Switch from './components/Switch'
import Turbulence from './components/Turbulence'

import Header from './Header'
import Resume from './Resume'
import Footer from './Footer'

import './assets/styles/base.scss'

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <Canvas />
    <Cursor />
    <Turbulence />
    <div id="portfolio" className="distorted">
      <Cursor />
      <Header />
      <Resume />
      <Footer />
    </div>
  </React.StrictMode>,
);
