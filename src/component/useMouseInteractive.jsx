// useMouseInteractive.js
import { useState, useCallback, useEffect } from 'react';

const useMouseInteractive = (target, targetsOffset = 20, speed = 0.05) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [targetCoords, setTargetCoords] = useState({ x: 0, y: 0 });

  const animate = useCallback(() => {
    if (!target.current) return;

    target.current.style.transform = `translate(${-targetCoords.x / targetsOffset}px, ${-targetCoords.y / targetsOffset}px)`;
    requestAnimationFrame(animate);
  }, [target, targetCoords, targetsOffset]);

  const handleMouseMove = useCallback((e) => {
    const x = e.clientX - window.innerWidth / 2;
    const y = e.clientY - window.innerHeight / 2;
    setCoords({ x, y });

    setTargetCoords((prev) => ({
      x: prev.x + (x - prev.x) * speed,
      y: prev.y + (y - prev.y) * speed,
    }));

    animate();
  }, [animate, speed]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);
};

export default useMouseInteractive;
