import { useLayoutEffect, useState } from 'react';

export function WindowSize() {
  const [size, setSize] = useState({width:null,height:null});
  useLayoutEffect(() => {
    function updateSize() {
      setSize({width:window.innerWidth, height:window.innerHeight});
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}
