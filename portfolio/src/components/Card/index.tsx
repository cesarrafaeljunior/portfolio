import { CardStyled } from "./style";
import { ICardInfos } from "../../interfaces/databases";

export const Card = ({ name, image, type, description }: ICardInfos) => {
  return (
    <CardStyled>
      <img src={image} alt="" />
      {/* <section className="section__description">
        <p>{description}</p>
      </section> */}

      <div>
        <p>{name}</p>
        <p>{type}</p>
      </div>
    </CardStyled>
  );
};
