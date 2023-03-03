import { HeaderStyled } from "./style";
import LogoAssasins from "../../assets/img/icons/assasin_icon.png";
import { BoxLinks } from "./BoxLinks/indx";

export const MenuNav = () => {
  return (
    <HeaderStyled>
      <nav>
        <BoxLinks route="/informations" navOption="Informações" />
        <BoxLinks route="/abilities" navOption="Habilidades" />
        <BoxLinks route="/experience" navOption="Experiência" />
        <BoxLinks route="/projects" navOption="Projetos" />
        <BoxLinks route="/contact" navOption="Contato" />
      </nav>
    </HeaderStyled>
  );
};
