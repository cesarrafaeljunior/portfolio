import { IChildren } from "../../interfaces/props";
import { SectionMenuNavStyled } from "./style";

export const MenuNav = ({ children }: IChildren) => {
  return <SectionMenuNavStyled>{children}</SectionMenuNavStyled>;
};
