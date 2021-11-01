import { useState, useEffect } from 'react';
import { ReactDangerousHTML } from '../../utils/types';

const useImportIcon = (name: string, solid: boolean): ReactDangerousHTML => {
  const [svg, setSvg] = useState<ReactDangerousHTML | null>(null);
  useEffect(() => {
    const iconTypePath = solid ? 'solid' : 'outline';
    import(`../../../assets/svg/${iconTypePath}/${name}.svg`).then((file) => {
      setSvg({
        __html: file.default,
      });
    });
  }, [solid, name]);
  return svg;
};

export default useImportIcon;
