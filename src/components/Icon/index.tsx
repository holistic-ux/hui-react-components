import React from 'react';
import useImportIcon from './hooks/useImportIcon';
import useSpecificSize from './hooks/useSpecificSize';

import { IconProps } from './props';
import './styles.css';

/**
 * Holistic UI Icon Component
 * @see {@link https://todo.com/} for official documentation.
 * @param name
 * Required |
 * Specifies the icon.
 * @param kind
 * Default: 'primary' |
 * Specifies the icon style color with a string (Use no-kind if you want to use currentColor based on your color css context).
 * @param size
 *  Default: 'normal' |
 * Specifies the icon size between small, normal and big.
 * @param specificSize
 *  Default: null |
 * Specifies the icon size a string Ex: 200px || 10% || 5rem || 2em.
 * @param solid
 * Default: false |
 * Specifies if the icon will be solid or outline.
 * @param hoverTransition
 * Default: false |
 * Specifies if the icon will be a hover effect.
 * @param className
 * Default: null |
 * You can use this prop to send a string with your custom css classes.
 * @returns
 * A HUI Icon react component
 */
const Icon: React.FC<IconProps> = ({
  name,
  solid = false,
  kind = 'primary',
  size = 'normal',
  hoverTransition = false,
  specificSize,
  className,
}) => {
  const svg = useImportIcon(name, solid);
  const prefix = 'hui-icon';
  const getClasses = (): string => {
    const classes: string[] = [`${prefix}`, `${prefix}--${kind}`];
    !specificSize && classes.push(`${prefix}--${size}-size`);
    hoverTransition && classes.push(`${prefix}--hover`);
    className && classes.push(className);
    return classes.join(' ');
  };

  const style = useSpecificSize(specificSize);

  return (
    <span
      style={specificSize && style}
      className={getClasses()}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={svg}
    />
  );
};

export default Icon;
