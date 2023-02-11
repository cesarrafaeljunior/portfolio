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
        <a href="#">Informações</a>
        <span className="lineNav"></span>
        <a>Habilidades</a>
        <span className="lineNav"></span>
        <a>Experiência</a>
        <span className="lineNav"></span>
        <a>Projetos</a>
        <span className="lineNav"></span>
        <a>Contato</a>
        <span className="lineNav"></span>
      </nav>
    </SectionMenuNavStyled>
  );
};
