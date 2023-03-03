import { ReactNode } from "react";

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

export interface ICardComponent extends IButtonComponent {
  children?: ReactNode;
  flexDirection?: String;
  cursor?: String;
}

export interface ICardHighlightComponent {
  img: any;
  title: string;
  link: string;
}

export interface ICardIconsComponent extends ICardHighlightComponent {}

export interface ICardSkillsComponent {
  icon?: any;
  alt?: string;
  position?: string;
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
}

export interface IInputComponent {
  placeholder: string;
}

export interface IDivComponent {
  display?: string;
  alignItems?: string;
  justifyContent?: string;
  gap?: string;
  width?: string;
  height?: string;
  className?: String;
}
