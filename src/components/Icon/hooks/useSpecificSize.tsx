import { useState, useEffect, CSSProperties } from 'react';

const useSpecificSize = (specificSize): CSSProperties => {
  const [size, setSize] = useState<CSSProperties | null>(null);
  useEffect(() => {
    setSize({
      width: specificSize,
      height: specificSize,
    });
  }, [specificSize]);

  return size;
};

export default useSpecificSize;
