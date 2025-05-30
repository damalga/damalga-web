import React from 'react'
import ReactDOM from 'react-dom/client'

import Cursor from './components/Cursor'
import Canvas from './components/Canvas'
import Switch from './components/Switch'

import Header from './Header'
import Resume from './Resume'
import Footer from './Footer'

import './assets/styles/base.scss'

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <Canvas />
    <div id="portfolio">
      <Cursor />
      <Switch />
      <Header />
      <Resume />
      <Footer />
    </div>
  </React.StrictMode>,
);
