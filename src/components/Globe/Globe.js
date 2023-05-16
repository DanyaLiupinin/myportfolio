
import React, { useState, useRef, useEffect } from 'react';

import './Globe.css'

import * as THREE from "three";
import GLOBE from "vanta/dist/vanta.globe.min.js";

const Globe = () => {

  const vantaRef = useRef(null)
  const [vantaEffect, setVantaEffect] = useState(null)

  useEffect(() => {

    if (!vantaEffect) {

      setVantaEffect(GLOBE({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xd91aca,
        color2: 0xbd5d5d,
        size: 1,
        backgroundColor: 0x0
      }));

    }

    return () => {
      if (vantaEffect)
        vantaEffect.destroy();
    }
  }, [vantaEffect])

  return (
    <div className='globe' ref={vantaRef}></div>
  )
}

export default Globe