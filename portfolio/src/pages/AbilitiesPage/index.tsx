import { techs } from "../../database/techs";
import { CardSkills } from "../../components/common/Cards/CardSkills";
import { SkillTree } from "../../components/SkillsTree";
import { AbilitiesPageStyled } from "./style";
import { Div } from "../../components/common/Div/style";
import AbilityPoints from "../../assets/img/icons/abilityPoints_icon.png";
import { Footer } from "../../components/common/Footer";

export const AbilitiesPage = () => {
  return (
    <AbilitiesPageStyled>
      <div className="ability__points">
        <img src={AbilityPoints} alt=" Icone de pontos de habilidades" />
        <p className="text__points">Pontos de Habilidades</p>
        <p className="quantity__points">1</p>
      </div>
      <Div
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        width="100%"
        height="100%"
      >
        <SkillTree title="Front-End">
          <Div
            display="flex"
            flexDirection="column"
            gap="1em"
            padding="0 0.5em 0 0"
          >
            <CardSkills
              icon={null}
              alt="nullTech"
              bottom="-0.7em"
              rotate="90deg"
            />
            <CardSkills
              icon={null}
              alt="nullTech"
              bottom="-0.7em"
              rotate="90deg"
            />
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
            <CardSkills
              icon={null}
              alt="nullTech"
              bottom="-0.7em"
              rotate="90deg"
            />
            <CardSkills
              icon={null}
              alt="nullTech"
              bottom="-0.7em"
              rotate="90deg"
            />
            <CardSkills
              icon={null}
              alt="nullTech"
              bottom="-0.7em"
              rotate="90deg"
            />
            <CardSkills
              icon={null}
              alt="nullTech"
              bottom="-0.7em"
              rotate="90deg"
            />
            <CardSkills
              icon={null}
              alt="nullTech"
              bottom="-0.7em"
              rotate="90deg"
            />
            {techs.map((elem) =>
              elem.type == "front_end" ? (
                <CardSkills
                  icon={elem.image}
                  alt={elem.tech}
                  display="none"
                  description={elem.description}
                />
              ) : null
            )}
          </Div>
        </SkillTree>
        <SkillTree title="Back-End">
          <Div
            display="flex"
            width="100%"
            height="50%"
            alignItems="center"
            justifyContent="center"
            padding="0 0.5em 0 0"
          >
            <CardSkills
              icon={null}
              alt="nullTech"
              bottom="-0.7em"
              rotate="90deg"
            />
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
            <CardSkills
              icon={null}
              alt="nullTech"
              bottom="-0.7em"
              rotate="90deg"
            />
            <CardSkills
              icon={null}
              alt="nullTech"
              bottom="-0.7em"
              rotate="90deg"
            />
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
            <CardSkills
              icon={null}
              alt="nullTech"
              bottom="-0.7em"
              rotate="90deg"
            />
            <CardSkills
              icon={null}
              alt="nullTech"
              bottom="-0.7em"
              rotate="90deg"
            />
            <CardSkills
              icon={null}
              alt="nullTech"
              bottom="-0.7em"
              rotate="90deg"
            />
            <CardSkills
              icon={null}
              alt="nullTech"
              bottom="-0.7em"
              rotate="90deg"
            />
            <CardSkills
              icon={null}
              alt="nullTech"
              bottom="-0.7em"
              rotate="90deg"
            />
            <CardSkills
              icon={null}
              alt="nullTech"
              bottom="-0.7em"
              rotate="90deg"
            />
            {techs.map((elem) =>
              elem.type == "back_end" ? (
                <CardSkills
                  icon={elem.image}
                  alt={elem.tech}
                  display="none"
                  description={elem.description}
                />
              ) : null
            )}
          </Div>
        </SkillTree>
        <SkillTree title="Passiva">
          <Div
            display="flex"
            gap="1em"
            wrap="wrap"
            width="100%"
            height="50%"
            alignItems="center"
            justifyContent="center"
          >
            <CardSkills
              icon={null}
              alt="nullTech"
              bottom="-0.7em"
              rotate="90deg"
            />
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
            <CardSkills
              icon={null}
              alt="nullTech"
              bottom="-0.7em"
              rotate="90deg"
            />
            <CardSkills
              icon={null}
              alt="nullTech"
              bottom="-0.7em"
              rotate="90deg"
            />
            {techs.map((elem) =>
              elem.type == "passive" ? (
                <CardSkills icon={elem.image} alt={elem.tech} display="none" />
              ) : null
            )}
          </Div>
        </SkillTree>
      </Div>
      <Footer phrase='"O aprendizado é conhecimento, e conhecimento é liberade e poder"' />
    </AbilitiesPageStyled>
  );
};
