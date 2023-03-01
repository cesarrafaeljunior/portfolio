import { INavOptions } from "../../../interfaces/props";
import { BoxLinksStyled } from "./style";

export const BoxLinks = ({ navOption }: INavOptions) => {
  return (
    <BoxLinksStyled>
      <a href="#">{navOption}</a>
      <span className="lineNav">
        <span className="lineNavAnimation"></span>
      </span>
    </BoxLinksStyled>
  );
};
