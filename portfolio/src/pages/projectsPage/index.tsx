import { ButtonStyled } from "../../components/common/Button/style";
import { Footer } from "../../components/common/Footer";
import { ProjectsPageStyled } from "./style";
import { useContext } from "react";
import { projectContext } from "../../contexts/ProjectContext";

export const ProjectsPage = () => {
  const { projectsFiltered, projectsFilter } = useContext(projectContext);

  return (
    <ProjectsPageStyled>
      <section className="section__filter">
        <h2>Filtrar por:</h2>
        <div className="box__options">
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
        </div>
      </section>
      <section className="section__list">
        <ul></ul>
      </section>
      <Footer phrase='"Você vai gostar do prêmio, mas você deve descer ao abismo para buscá-lo."' />
    </ProjectsPageStyled>
  );
};
