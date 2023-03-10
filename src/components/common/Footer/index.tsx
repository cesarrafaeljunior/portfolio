import { IPhrase } from "../../../interfaces/props";
import { FooterStyled } from "./style";

export const Footer = ({ phrase }: IPhrase) => {
  return <FooterStyled>{phrase}</FooterStyled>;
};
