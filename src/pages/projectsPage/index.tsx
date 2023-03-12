import { ButtonStyled } from "../../components/common/Button/style";
import { Footer } from "../../components/common/Footer";
import { ProjectsPageStyled } from "./style";
import { useContext } from "react";
import { projectContext } from "../../contexts/ProjectContext";
import { Div } from "../../components/common/Div/style";
import { projects } from "../../database/projects";
import { CardHighlight } from "../../components/common/Cards/CardHighlights";

export const ProjectsPage = () => {
  const { projectsFiltered, projectsFilter } = useContext(projectContext);

  return (
    <ProjectsPageStyled className="animate__fadeInUp">
      <section className="section__filter animate__fadeInLeftBig">
        <h2>Filtrar por:</h2>
        <Div
          display="flex"
          wrap="wrap"
          justifyContent="center"
          alignItems="center"
          gap="0.8em"
          className="box__options"
        >
          <ButtonStyled
            width="150px"
            height="44px"
            fontSize="18px"
            backgroundcolor="#2D3C42"
            color="#ffffff"
            hover="#6C828B"
            focus="#6C828B"
          >
            Front end
          </ButtonStyled>
          <ButtonStyled
            width="150px"
            height="44px"
            fontSize="18px"
            backgroundcolor="#2D3C42"
            color="#ffffff"
            hover="#6C828B"
            focus="#6C828B"
          >
            Back end
          </ButtonStyled>
          <ButtonStyled
            width="150px"
            height="44px"
            fontSize="18px"
            backgroundcolor="#2D3C42"
            color="#ffffff"
            hover="#6C828B"
            focus="#6C828B"
          >
            Todos
          </ButtonStyled>
        </Div>
      </section>
      <section className="section__list">
        <ul>
          {projects.map((elem) => (
            <CardHighlight
              title={elem.name}
              img={elem.image}
              repo={elem.repository}
              deploy={typeof elem.deploy == "string" ? elem.deploy : undefined}
              doc={
                typeof elem.documentation == "string"
                  ? elem.documentation
                  : undefined
              }
            />
          ))}
        </ul>
      </section>
      <Footer phrase='"Você vai gostar do prêmio, mas você deve descer ao abismo para buscá-lo."' />
    </ProjectsPageStyled>
  );
};
