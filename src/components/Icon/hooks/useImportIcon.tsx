import { useState, useEffect } from 'react';
import { ReactDangerousHTML } from '../../utils/types';
// import sss from '../../../assets/svg/outline/menu.svg';

const useImportIcon = (name: string, solid: boolean): ReactDangerousHTML => {
  const [svg, setSvg] = useState<ReactDangerousHTML | null>(null);
  useEffect(() => {
    // console.log(sss);
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
