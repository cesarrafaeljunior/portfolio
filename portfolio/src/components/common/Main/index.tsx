import { IChildren } from "../../../interfaces/props";
import { MainStyled } from "./style";

export const Main = ({ children }: IChildren) => {
  return <MainStyled>{children}</MainStyled>;
};
