import { SectionMenuNavStyled } from "./style";
import LogoAssasins from "../../assets/img/icons/assasin_icon.png";
import CloseArrow from "../../assets/img/icons/closeArror-2.png";
import { BoxLinks } from "./BoxLinks/indx";

export const MenuNav = () => {
  return (
    <SectionMenuNavStyled>
      <nav>
        <BoxLinks route="/informations" navOption="Informações" />
        <BoxLinks route="/habilities" navOption="Habilidades" />
        <BoxLinks route="/experience" navOption="Experiência" />
        <BoxLinks route="/projects" navOption="Projetos" />
        <BoxLinks route="/contact" navOption="Contato" />
      </nav>
    </SectionMenuNavStyled>
  );
};
