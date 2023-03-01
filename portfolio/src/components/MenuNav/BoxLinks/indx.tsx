import { Link } from "react-router-dom";
import { INavOptions } from "../../../interfaces/props";
import { BoxLinksStyled } from "./style";

export const BoxLinks = ({ route, navOption }: INavOptions) => {
  return (
    <BoxLinksStyled>
      <Link to={`${route}`}>{navOption}</Link>
      <span className="lineNav">
        <span className="lineNavAnimation"></span>
      </span>
    </BoxLinksStyled>
  );
};
