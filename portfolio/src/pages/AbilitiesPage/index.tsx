import { techs } from "../../database/techs";
import { CardSkills } from "../../components/common/Cards/CardSkills";
import { SkillTree } from "../../components/SkillsTree";
import { AbilitiesPageStyled } from "./style";
import { Div } from "../../components/common/Div/style";

export const AbilitiesPage = () => {
  return (
    <AbilitiesPageStyled>
      <SkillTree>
        <Div
          display="flex"
          flexDirection="column"
          gap="1em"
          padding="0 0.5em 0 0"
        >
          <CardSkills icon={null} alt="nullTech" />
          <CardSkills icon={null} alt="nullTech" />
        </Div>
        <Div
          display="flex"
          gap="1em"
          wrap="wrap"
          width="100%"
          height="100%"
          alignItems="center"
          justifyContent="center"
        >
          <CardSkills icon={null} alt="nullTech" />
          <CardSkills icon={null} alt="nullTech" />
          <CardSkills icon={null} alt="nullTech" />
          <CardSkills icon={null} alt="nullTech" />
          <CardSkills icon={null} alt="nullTech" />
          {techs.map((elem) =>
            elem.type == "front_end" ? (
              <CardSkills icon={elem.image} alt={elem.tech} />
            ) : null
          )}
        </Div>
      </SkillTree>
      <SkillTree>
        <Div
          display="flex"
          width="100%"
          height="50%"
          alignItems="center"
          justifyContent="center"
          padding="0 0.5em 0 0"
        >
          <CardSkills icon={null} alt="nullTech" />
        </Div>
        <Div
          display="flex"
          gap="1.2em"
          wrap="wrap"
          width="100%"
          height="50%"
          alignItems="center"
          justifyContent="flex-end"
          padding="0 0.5em 0 0"
        >
          <CardSkills icon={null} alt="nullTech" />
          <CardSkills icon={null} alt="nullTech" />
        </Div>
        <Div
          display="flex"
          gap="1em"
          wrap="wrap"
          width="100%"
          height="50%"
          alignItems="center"
          justifyContent="center"
        >
          <CardSkills icon={null} alt="nullTech" />
          <CardSkills icon={null} alt="nullTech" />
          <CardSkills icon={null} alt="nullTech" />
          <CardSkills icon={null} alt="nullTech" />
          <CardSkills icon={null} alt="nullTech" />
          <CardSkills icon={null} alt="nullTech" />
          {techs.map((elem) =>
            elem.type == "back_end" ? (
              <CardSkills icon={elem.image} alt={elem.tech} />
            ) : null
          )}
        </Div>
      </SkillTree>
      <SkillTree>
        <Div
          display="flex"
          gap="1em"
          wrap="wrap"
          width="100%"
          height="50%"
          alignItems="center"
          justifyContent="center"
        >
          <CardSkills icon={null} alt="nullTech" />
        </Div>
        <Div
          display="flex"
          gap="1em"
          wrap="wrap"
          width="100%"
          height="50%"
          alignItems="center"
          justifyContent="center"
        >
          <CardSkills icon={null} alt="nullTech" />
          <CardSkills icon={null} alt="nullTech" />
          {techs.map((elem) =>
            elem.type == "passive" ? (
              <CardSkills icon={elem.image} alt={elem.tech} />
            ) : null
          )}
        </Div>
      </SkillTree>
    </AbilitiesPageStyled>
  );
};
