import { ICardHighlightComponent } from "../../../../interfaces/components";
import { CardStyled } from "../style";

const color = {
  borderColor: "#ADA096",
  hoverBorder: "#F7D59A",
};

export const CardHighlight = ({
  img,
  title,
  link,
}: ICardHighlightComponent) => {
  return (
    <CardStyled
      width="288px"
      height="199px"
      bordercolor={color.borderColor}
      cursor="pointer"
      hover={color.hoverBorder}
      position="relative"
    >
      <a href={link} target="blank"></a>
      <div className="banner_card">
        <p>{title}</p>
      </div>
      <img src={img} alt="Port Geek Project Cover" />
    </CardStyled>
  );
};