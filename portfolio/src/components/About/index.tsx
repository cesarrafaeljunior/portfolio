import { CardStyled } from "../common/Cards/style";
import { AboutStyled } from "./style";

export const About = () => {
  return (
    <AboutStyled className="animate__fadeInLeftBig">
      <CardStyled
        width="100%"
        height="100%"
        padding="1em"
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        flexDirection="column"
        gap="1em"
        backgroundcolor="#1E2E35"
        bordercolor="#ADA096"
        color="white"
      >
        <h3>Sobre mim</h3>
        <p>Olá, me chamo césinha</p>
      </CardStyled>
    </AboutStyled>
  );
};
