import { Card } from "../../components/Card";
import { ButtonStyled } from "../../components/common/Button/style";
import { Footer } from "../../components/common/Footer";
import { ProjectsPageStyled } from "./style";

export const ProjectsPage = () => {
  return (
    <ProjectsPageStyled>
      <section className="section__filter">
        <h2>Filtrar por:</h2>
        <div className="box__options">
          <ButtonStyled width="150px" height="44px" fontSize="18px">
            Front end
          </ButtonStyled>
          <ButtonStyled width="150px" height="44px" fontSize="18px">
            Back end
          </ButtonStyled>
          <ButtonStyled width="150px" height="44px" fontSize="18px">
            Todos
          </ButtonStyled>
        </div>
      </section>
      <section>
        <ul>
          <Card />
        </ul>
      </section>
      <Footer phrase="Você vai gostar do prêmio, mas você deve descer ao abismo para buscá-lo." />
    </ProjectsPageStyled>
  );
};
