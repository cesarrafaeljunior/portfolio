import { Link } from "react-router-dom";
import { INavOptions } from "../../../interfaces/props";
import { BoxLinksStyled } from "./style";

export const BoxLinks = ({ route, navOption }: INavOptions) => {
  return (
    <BoxLinksStyled>
      <Link to={`${route}`} className="text__link">
        {navOption}
      </Link>
      <div className="blur__box"></div>
    </BoxLinksStyled>
  );
};
