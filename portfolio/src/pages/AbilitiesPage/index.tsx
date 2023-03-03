import HmtlIcon from "../../assets/img/icons/html_icon.png";
import CssIcon from "../../assets/img/icons/css_icon.png";
import JsIcon from "../../assets/img/icons/javaScript_icon.png";
import GitIcon from "../../assets/img/icons/git_icon.png";
import GitHub from "../../assets/img/icons/github_icon.png";
import ReactIcon from "../../assets/img/icons/react_icon.png";
import NodeIcon from "../../assets/img/icons/node_icon.png";
import { CardSkills } from "../../components/common/Cards/CardSkills";
import { SkillTree } from "../../components/SkillsTree";
import { AbilitiesPageStyled } from "./style";

export const AbilitiesPage = () => {
  return (
    <AbilitiesPageStyled>
      <SkillTree>
        <CardSkills
          icon={null}
          alt="Null icon"
          position="absolute"
          top="0"
          right="0"
        />
        <CardSkills
          icon={null}
          alt="Null icon"
          position="absolute"
          top="5em"
          right="0"
        />
        <CardSkills
          icon={null}
          alt="Null icon"
          position="absolute"
          top="10em"
          right="5em"
        />
        <CardSkills
          icon={null}
          alt="Null Icon"
          position="absolute"
          top="10em"
          right="0"
        />
        <CardSkills
          icon={null}
          alt="Null Icon"
          position="absolute"
          top="10em"
          right="10em"
        />
        <CardSkills
          icon={GitIcon}
          alt="Git icon"
          position="absolute"
          top="15em"
          right="0"
        />
        <CardSkills
          icon={GitHub}
          alt="GitHub icon"
          position="absolute"
          top="15em"
          right="5em"
        />
        <CardSkills
          icon={ReactIcon}
          alt="React icon"
          position="absolute"
          top="15em"
          right="10em"
        />
        <CardSkills
          icon={JsIcon}
          alt="JavaScript icon"
          position="absolute"
          top="20em"
          right="0"
        />
        <CardSkills
          icon={CssIcon}
          alt="Css icon"
          position="absolute"
          top="20em"
          right="5em"
        />
        <CardSkills
          icon={HmtlIcon}
          alt="Html icon"
          position="absolute"
          top="20em"
          right="10em"
        />
      </SkillTree>
      <SkillTree>
        <CardSkills icon={null} alt="Null icon" />
        <CardSkills icon={null} alt="Null icon" />
        <CardSkills icon={null} alt="Null icon" />
        <CardSkills icon={null} alt="Null Icon" />
        <CardSkills icon={GitIcon} alt="Git icon" />
        <CardSkills icon={GitHub} alt="GitHub icon" />
        <CardSkills icon={ReactIcon} alt="React icon" />
        <CardSkills icon={HmtlIcon} alt="Html icon" />
        <CardSkills icon={CssIcon} alt="Css icon" />
        <CardSkills icon={NodeIcon} alt="Node icon" />
      </SkillTree>
    </AbilitiesPageStyled>
  );
};
