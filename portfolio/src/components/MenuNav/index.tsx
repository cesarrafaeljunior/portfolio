import { SectionMenuNavStyled } from "./style";
import LogoAssasins from "../../assets/img/icons/assasin_icon.png";
import CloseArrow from "../../assets/img/icons/closeArror-2.png";
import { BoxLinks } from "./BoxLinks/indx";

export const MenuNav = ({
  isOpenMenu,
  setIsOpenMenu,
  animationEntrance,
  setAnimationEntrance,
}: any) => {
  return (
    <SectionMenuNavStyled animationEntrance={animationEntrance}>
      <nav>
        <figure>
          <img src={LogoAssasins} alt="Assasins Icon" />
          <img
            src={CloseArrow}
            alt="Assasins Icon"
            className="btn__closeArrow"
            onClick={() => {
              setAnimationEntrance("exit");
              setTimeout(() => {
                setIsOpenMenu(!isOpenMenu);
              }, 250);
            }}
          />
        </figure>
        <BoxLinks route="/informations" navOption="Informações" />
        <BoxLinks route="/habilities" navOption="Habilidades" />
        <BoxLinks route="/experience" navOption="Experiência" />
        <BoxLinks route="/projects" navOption="Projetos" />
        <BoxLinks route="/contact" navOption="Contato" />
      </nav>
    </SectionMenuNavStyled>
  );
};
