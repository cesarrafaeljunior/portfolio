import { IChildren } from "../../interfaces/props";
import { SkillsTreeStyled } from "./style";

export const SkillTree = ({ children, title }: IChildren) => {
  return (
    <SkillsTreeStyled>
      {children}
      <p>{title}</p>
    </SkillsTreeStyled>
  );
};
