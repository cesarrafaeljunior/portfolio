import { CardStyled } from "./style";
import { ICardInfos } from "../../interfaces/databases";

export const Card = ({ name, image, type, description }: ICardInfos) => {
  return (
    <CardStyled>
      <img src={image} alt="" />
      <div>
        <p>{name}</p>
        <p>{type}</p>
      </div>
    </CardStyled>
  );
};
