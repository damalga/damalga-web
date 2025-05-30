import { useEffect, useRef } from 'react';

function Turbulence() {
  const turbulenceRef = useRef(null);
  const displacementRef = useRef(null);

  useEffect(() => {
    let frame = 0;
    const animate = () => {
      const freq = 0.0002 + 0.0008 * Math.sin(frame * 0.04);
      if (turbulenceRef.current) {
        turbulenceRef.current.setAttribute('baseFrequency', `${freq} ${freq}`);
      }
      if (displacementRef.current) {
        const scale = 4 + 2 * Math.sin(frame * 0.06);
        displacementRef.current.setAttribute('scale', scale);
      }
      frame++;
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <svg style={{ display: 'none' }}>
      <filter id="wavy">
        <feTurbulence
          ref={turbulenceRef}
          type="turbulence"
          baseFrequency="0.01 0.02"
          numOctaves="3"
          result="warp"
        />
        <feDisplacementMap
          ref={displacementRef}
          in="SourceGraphic"
          in2="warp"
          scale="10"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </svg>
  );
}

export default Turbulence;
