import { SectionMenuNavStyled } from "./style";
import LogoAssasins from "../../assets/img/icons/assasin_icon.png";
import CloseArrow from "../../assets/img/icons/closeArror-2.png";

export const MenuNav = () => {
  return (
    <SectionMenuNavStyled>
      <nav>
        <figure>
          <img src={LogoAssasins} alt="Assasins Icon" />
          <img
            src={CloseArrow}
            alt="Assasins Icon"
            className="btn__closeArrow"
          />
        </figure>
        <div className="box__links">
          <a href="#">Informações</a>
          <span className="lineNav">
            <span className="lineNavAnimation"></span>
          </span>
        </div>
        <div className="box__links">
          <a>Habilidades</a>
          <span className="lineNav">
            <span className="lineNavAnimation"></span>
          </span>
        </div>
        <div className="box__links">
          <a>Experiência</a>
          <span className="lineNav">
            <span className="lineNavAnimation"></span>
          </span>
        </div>
        <div className="box__links">
          <a>Projetos</a>
          <span className="lineNav">
            <span className="lineNavAnimation"></span>
          </span>
        </div>
        <div className="box__links">
          <a>Contato</a>
          <span className="lineNav">
            <span className="lineNavAnimation"></span>
          </span>
        </div>
      </nav>
    </SectionMenuNavStyled>
  );
};
