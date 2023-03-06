import { useState } from "react";
import { HeaderStyled } from "./style";
import { BoxLinks } from "./BoxLinks/indx";

export const MenuNav = ({ className }: any) => {
  return (
    <HeaderStyled className={className}>
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
