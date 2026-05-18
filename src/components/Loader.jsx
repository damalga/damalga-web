import { useEffect, useRef } from 'react'

function Loader({ onComplete, onSettle }) {
  const overlayRef = useRef(null)
  const nameRef    = useRef(null)

  useEffect(() => {
    const { gsap } = window

    const tl = gsap.timeline({ onComplete })

    tl.to(nameRef.current, {
      y: 0,
      opacity: 1,
      duration: 0,
      ease: 'power3.out',
      onComplete: onSettle,
    })
    .to({}, { duration: 1.2 })
    .to(nameRef.current, {
      y: -30,
      opacity: 0,
      duration: 0.55,
      ease: 'power3.in',
    })
    .to(overlayRef.current, {
      opacity: 0,
      duration: 0.4,
      ease: 'power2.inOut',
    }, '-=0.12')

    return () => tl.kill()
  }, [])

  return (
    <div ref={overlayRef} id="loader" className="distorted">
      <div className="loader__name-wrap">
        <div ref={nameRef} className="loader__name">
          WHO AM I ?
        </div>
      </div>
    </div>
  )
}

export default Loader
