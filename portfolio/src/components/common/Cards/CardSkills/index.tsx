import { ICardSkillsComponent } from "../../../../interfaces/components";
import { CardSkillsStyled } from "./style";
import NoneIcon from "../../../../assets/img/icons/cadeado_icon.png";

export const CardSkills = ({ icon, alt }: ICardSkillsComponent) => {
  return (
    <CardSkillsStyled>
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
        <div className="description__true"></div>
      </div>
    </CardSkillsStyled>
  );
};
