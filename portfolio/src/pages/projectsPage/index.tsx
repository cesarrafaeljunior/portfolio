import { Card } from "../../components/Card";
import { ButtonStyled } from "../../components/common/Button/style";
import { Footer } from "../../components/common/Footer";
import { ProjectsPageStyled } from "./style";
import { projects } from "../../database";
import { MenuNav } from "../../components/MenuNav";

export const ProjectsPage = () => {
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
        <ul>
          {projects.map((elem) => {
            return (
              <Card
                name={elem.name}
                image={elem.image}
                type={elem.type}
                description={elem.description}
              />
            );
          })}
        </ul>
      </section>
      <Footer phrase='"Você vai gostar do prêmio, mas você deve descer ao abismo para buscá-lo."' />
    </ProjectsPageStyled>
  );
};
