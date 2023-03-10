import { HighlightsStyled } from "./style";
import PortGeek from "../../assets/img/capas/port_geek.png";
import MksSystem from "../../assets/img/capas/mks_system.png";
import { CardHighlight } from "../common/Cards/CardHighlights";

const PortGeekDeploy = "https://port-geek-main.vercel.app/";
const MksDeploy =
  "https://teste-tecnico-16mhh7qbb-cesarrafaeljunior.vercel.app/mainPage";

export const Highlights = () => {
  return (
    <HighlightsStyled className="animate__fadeInDown">
      <div className="box__cards__highlights">
        <CardHighlight
          img={PortGeek}
          title="Port Geek"
          deploy={PortGeekDeploy}
        />
        <CardHighlight img={MksSystem} title="Mks" deploy={MksDeploy} />
      </div>
    </HighlightsStyled>
  );
};
