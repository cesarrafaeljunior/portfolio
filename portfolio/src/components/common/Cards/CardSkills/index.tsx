import { ICardSkillsComponent } from "../../../../interfaces/components";
import { CardSkillsStyled } from "./style";
import NoneIcon from "../../../../assets/img/icons/cadeado_icon.png";

export const CardSkills = ({
  icon,
  alt,
  position,
  top,
  right,
  bottom,
  left,
}: ICardSkillsComponent) => {
  return (
    <CardSkillsStyled
      position={position}
      top={top}
      right={right}
      bottom={bottom}
      left={left}
    >
      {icon ? (
        <figure>
          <img src={icon} alt={alt} />
        </figure>
      ) : (
        <figure>
          <img src={NoneIcon} alt="None icon" />
        </figure>
      )}
    </CardSkillsStyled>
  );
};
