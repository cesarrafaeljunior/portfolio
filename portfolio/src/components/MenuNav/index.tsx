import { SectionMenuNavStyled } from "./style";
import LogoAssasins from "../../assets/img/icons/assasin_icon.png";
import CloseArrow from "../../assets/img/icons/closeArror-2.png";
import { BoxLinks } from "./BoxLinks/indx";

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
        <BoxLinks navOption="Informações" />
        <BoxLinks navOption="Habilidades" />
        <BoxLinks navOption="Experiência" />
        <BoxLinks navOption="Projetos" />
        <BoxLinks navOption="Contato" />
      </nav>
    </SectionMenuNavStyled>
  );
};
