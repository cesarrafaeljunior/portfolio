import { SocialMediaStyled } from "./style";
import GitHubIcon from "../../assets/img/icons/github.png";
import LinkedinIcon from "../../assets/img/icons/linkedin.png";
import { CardIcons } from "../common/Cards/CardIcons";
import { Input } from "../common/Input";
export const SocialMedia = () => {
  return (
    <SocialMediaStyled>
      <h2>Redes sociais</h2>
      <div className="box__cardIcons">
        <CardIcons
          img={GitHubIcon}
          title="Git Hub Icon"
          link="https://github.com/cesarrafaeljunior"
        />
        <CardIcons
          img={LinkedinIcon}
          title="Linkedin Icon"
          link="https://www.linkedin.com/in/cesarrafaeljunior/"
        />
      </div>
      <div className="box__contact">
        <Input placeholder="Insira seu nome" />
        <Input placeholder="Insira seu email" />
      </div>
      <h3>Entrar em Contato</h3>
    </SocialMediaStyled>
  );
};
