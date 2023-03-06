import { ICardSkillsComponent } from "../../../../interfaces/components";
import { CardSkillsStyled } from "./style";
import NoneIcon from "../../../../assets/img/icons/cadeado_icon.png";

export const CardSkills = ({
  icon,
  alt,
  display,
  top,
  right,
  left,
  bottom,
  rotate,
  description,
}: ICardSkillsComponent) => {
  return (
    <CardSkillsStyled
      display={display}
      top={top}
      right={right}
      left={left}
      bottom={bottom}
      rotate={rotate}
    >
      <div className="border__inside">
        {icon ? (
          <figure>
            <img src={icon} alt={alt} />
          </figure>
        ) : (
          <figure>
            <img src={NoneIcon} alt="None icon" />
          </figure>
        )}
      </div>
      <div className="description">
        {description ? description : "Habilidade indisponível"}
      </div>
    </CardSkillsStyled>
  );
};
