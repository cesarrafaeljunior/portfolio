export interface IButtonComponent {
  display?: string;
  alignItems?: string;
  justifyContent?: string;
  gap?: string;
  alignSelf?: string;
  textAlign?: string;
  position?: string;
  top?: string;
  right?: string;
  left?: string;
  width?: string;
  maxWidth?: string;
  height?: string;
  margin?: string;
  padding?: string;
  backgroundcolor?: string;
  borderRadius?: string;
  bordercolor?: string;
  color?: string;
  fontSize?: string;
  hover?: string;
  fontWeigth?: string;
  focus?: String;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
