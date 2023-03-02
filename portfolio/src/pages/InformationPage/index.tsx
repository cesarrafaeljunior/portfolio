import { About } from "../../components/About";
import { Div } from "../../components/common/Div/style";
import { Footer } from "../../components/common/Footer";
import { Highlights } from "../../components/Highlights";
import { SocialMedia } from "../../components/SocialMedia";
import { InformationsPageStyled } from "./style";

export const InformationPage = () => {
  return (
    <InformationsPageStyled>
      <Div className="box__informations">
        <About />
        <Div className="box__aside">
          <Highlights />
          <SocialMedia />
        </Div>
      </Div>
      <Footer phrase='"Você encontra a resposta quando você não precisa perguntar"' />
    </InformationsPageStyled>
  );
};
