import { IChildren } from "../../interfaces/props";
import { SkillsTreeStyled } from "./style";

export const SkillTree = ({ children }: IChildren) => {
  return <SkillsTreeStyled>{children}</SkillsTreeStyled>;
};
