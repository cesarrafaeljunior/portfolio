import { ICardIconsComponent } from "../../../../interfaces/components";
import { CardIconsStyled } from "./style";

export const CardIcons = ({ img, title, link }: ICardIconsComponent) => {
  return (
    <CardIconsStyled href={link} target="_blank">
      <img src={img} alt={title} />
    </CardIconsStyled>
  );
};
