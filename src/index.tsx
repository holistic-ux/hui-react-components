import './assets/styles/index.css';

// General Types
export type {
  Kind,
  Shape,
  Size,
  ReactDangerousHTML,
} from './components/utils/types';

// Button
export type {
  ButtonProps,
  IconPosition,
  Target,
  TypeStyle,
} from './components/Button/props';
export { default as Button } from './components/Button';

// Loader
export type { LoaderProps } from './components/Loader/props';
export { default as Loader } from './components/Loader';

// Icon
export type { IconProps } from './components/Icon/props';
export { default as Icon } from './components/Icon';
