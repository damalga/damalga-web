import { useEffect, useRef } from 'react';

function Turbulence({ settle }) {
  const turbulenceRef = useRef(null);
  const displacementRef = useRef(null);
  const shouldSettle = useRef(false);

  useEffect(() => {
    if (settle) shouldSettle.current = true;
  }, [settle]);

  useEffect(() => {
    let freq = 0.012;
    let scale = 40;
    let settled = false;
    let idleFrame = 0;
    let maxFrame = 0;
    let rafId;

    const isSafari = /^((?!chrome|android|crios|fxios|edg).)*safari/i.test(navigator.userAgent);
    const skip = isSafari ? 3 : 2;
    let tick = 0;
    const animate = () => {
      if (tick++ % skip !== 0) {
        rafId = requestAnimationFrame(animate);
        return;
      }

      if (!shouldSettle.current) {
        freq  = 0.012 + 0.003 * Math.sin(maxFrame * 0.025);
        scale = 40   + 10   * Math.sin(maxFrame * 0.02);
        maxFrame++;
      } else if (!settled) {
        freq  += (0.0002 - freq)  * 0.02;
        scale += (4     - scale) * 0.02;
        if (Math.abs(freq - 0.0002) < 0.00005) {
          freq  = 0.0002;
          scale = 4;
          settled = true;
        }
      } else {
        freq  = 0.0002 + 0.0008 * Math.sin(idleFrame * 0.04);
        scale = 4     + 2      * Math.sin(idleFrame * 0.06);
        idleFrame++;
      }

      turbulenceRef.current?.setAttribute('baseFrequency', `${freq} ${freq}`);
      displacementRef.current?.setAttribute('scale', scale);

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <svg style={{ display: 'none' }}>
      <filter id="wavy" x="-25%" y="-25%" width="150%" height="150%">
        <feTurbulence
          ref={turbulenceRef}
          type="turbulence"
          baseFrequency="0.012 0.012"
          numOctaves="2"
          result="warp"
        />
        <feDisplacementMap
          ref={displacementRef}
          in="SourceGraphic"
          in2="warp"
          scale="40"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </svg>
  );
}

export default Turbulence;
