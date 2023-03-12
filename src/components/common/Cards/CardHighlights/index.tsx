import { ICardHighlightComponent } from "../../../../interfaces/components";
import { CardStyled } from "../style";
import { AiOutlineGithub } from "react-icons/ai";
import { BsDisplay } from "react-icons/bs";
import { MdMenuOpen } from "react-icons/md";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { Div } from "../../Div/style";

const color = {
  borderColor: "#ADA096",
  hoverBorder: "#F7D59A",
};

export const CardHighlight = ({
  img,
  title,
  deploy,
  repo,
  doc,
}: ICardHighlightComponent) => {
  let text = "";
  deploy ? (text = "Site") : (text = "Documentação");
  return (
    <CardStyled
      width="288px"
      height="199px"
      bordercolor={color.borderColor}
      cursor="pointer"
      hover={color.hoverBorder}
      position="relative"
      text={text}
    >
      <div className="banner_card">
        <p>{title}</p>
      </div>
      <div className="box__options">
        <Div
          display="flex"
          width="100%"
          height="100%"
          justifyContent="space-between"
        >
          <Div className="box box__github">
            <a href={repo} target="_blank">
              <AiOutlineGithub className="icon" />
            </a>
          </Div>
          <Div className="box box__display">
            {deploy ? (
              <a href={deploy} target="_blank">
                <BsDisplay className="icon" />
              </a>
            ) : (
              <a href={doc} target="_blank">
                <IoDocumentAttachOutline className="icon" />
              </a>
            )}
          </Div>
          <Div className="box box__details">
            <a href="#">
              <MdMenuOpen className="icon" />
            </a>
          </Div>
        </Div>
      </div>
      <img src={img} alt="Port Geek Project Cover" />
    </CardStyled>
  );
};
