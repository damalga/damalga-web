import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom/client'
import Lenis from '@studio-freight/lenis'

import Cursor from './components/Cursor'
import Canvas from './components/Canvas'
import Turbulence from './components/Turbulence'
import Loader from './components/Loader'

import Header from './Header'
import Resume from './Resume'
import Footer from './Footer'

import './assets/styles/base.scss'

function App() {
  const [loaderDone, setLoaderDone] = useState(false)
  const [settle, setSettle]         = useState(false)
  const portfolioRef  = useRef(null)
  const entranceRan   = useRef(false)

  useEffect(() => {
    const { gsap } = window
    gsap.set(portfolioRef.current, { autoAlpha: 0 })

    const lenis = new Lenis({ lerp: 0.1 })
    let rafId
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    const { gsap } = window
    const portfolio = portfolioRef.current

    const onMove = (e) => {
      const x =  (e.clientX / window.innerWidth  - 0.5)
      const y =  (e.clientY / window.innerHeight - 0.5)
      gsap.to(portfolio, {
        rotationY: x *  2.8,
        rotationX: -y *  1.2,
        transformPerspective: 1200,
        duration: 1.4,
        ease: 'power2.out',
      })
    }

    const onLeave = () => {
      gsap.to(portfolio, {
        rotationX: 0,
        rotationY: 0,
        duration: 1.8,
        ease: 'power2.out',
      })
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  function handleLoaderComplete() {
    if (entranceRan.current) return
    entranceRan.current = true

    const { gsap } = window

    setLoaderDone(true)

    gsap.set(['header .hello', 'header .intro'], { opacity: 0, x: (i) => i === 0 ? -40 : 40 })
    gsap.set(['header .second', '.col-1', '.col-2', '.col-3', 'footer'], { opacity: 0, y: 35 })
    gsap.set(portfolioRef.current, { autoAlpha: 1 })

    const tl = gsap.timeline()
    tl.to('header .hello',  { x: 0, opacity: 1, duration: 0.65, ease: 'power3.out' })
      .to('header .intro',  { x: 0, opacity: 1, duration: 0.65, ease: 'power3.out' }, '<0.08')
      .to('header .second', { y: 0, opacity: 1, duration: 0.55, ease: 'power3.out' }, '-=0.3')
      .to('.col-1',         { y: 0, opacity: 1, duration: 0.65, ease: 'power3.out' }, '-=0.1')
      .to('.col-2',         { y: 0, opacity: 1, duration: 0.65, ease: 'power3.out' }, '<0.1')
      .to('.col-3',         { y: 0, opacity: 1, duration: 0.65, ease: 'power3.out' }, '<0.1')
      .to('footer',         { y: 0, opacity: 1, duration: 0.5,  ease: 'power2.out' }, '-=0.25')
  }

  return (
    <>
      {!loaderDone && <Loader onComplete={handleLoaderComplete} onSettle={() => setSettle(true)} />}
      <Canvas />
      <Cursor />
      <Turbulence settle={settle} />
      <div ref={portfolioRef} id="portfolio" className="distorted">
        <Cursor />
        <Header />
        <Resume />
        <Footer />
      </div>
    </>
  )
}

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
