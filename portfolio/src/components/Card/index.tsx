import { CardStyled } from "./style";
import { ICardInfos } from "../../interfaces/databases";

export const Card = ({ name, image, type, description }: ICardInfos) => {
  return (
    <CardStyled>
      <div className="bg"></div>
      <section className="section__description">
        <p>{description}</p>
      </section>

      <div>
        <p>{name}</p>
        <p>{type}</p>
      </div>
    </CardStyled>
  );
};
