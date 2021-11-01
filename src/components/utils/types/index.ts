export type Kind =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'success'
  | 'warning'
  | 'error'
  | 'dark'
  | 'light';

export type Shape = 'default' | 'squared' | 'rounded';
export type Size = 'small' | 'normal' | 'big';
export type ReactDangerousHTML = {
  __html: string;
};
