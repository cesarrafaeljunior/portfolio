import { About } from "../../components/About";
import { Div } from "../../components/common/Div/style";
import { Footer } from "../../components/common/Footer";
import { Highlights } from "../../components/Highlights";
import { SocialMedia } from "../../components/SocialMedia";
import { InformationsPageStyled } from "./style";

export const InformationPage = () => {
  return (
    <InformationsPageStyled>
      <Div
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="100%"
        gap="5em"
        className="box__informations"
      >
        <About />
        <Div
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="3em"
          className="box__aside"
        >
          <h2>Em destaques</h2>
          <Highlights />
          <SocialMedia />
        </Div>
      </Div>
      <Footer phrase='"Você encontra a resposta quando você não precisa perguntar"' />
    </InformationsPageStyled>
  );
};
