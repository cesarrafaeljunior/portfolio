import { ButtonStyled } from "../common/Button/style";
import { Div } from "../common/Div/style";
import { Input } from "../common/Input";
import { ContactModalStyled } from "./style";
import { AiOutlineClose } from "react-icons/ai";

export const ContactModal = () => {
  return (
    <ContactModalStyled>
      <Div
        position="relative"
        display="flex"
        flexDirection="column"
        width="100%"
        maxWidth="500px"
        minHeight="500px"
        alignItems="center"
        gap="2em"
        border="solid 1px #F7D59A"
        padding="2.5em"
      >
        <figure className="box__menu_contact">
          <AiOutlineClose className="menu_hamb" />
        </figure>
        <Input placeholder="Digite seu nome" />
        <Input placeholder="Digite seu Email" />
        <textarea
          name="text"
          id="text"
          className="text__area_contact"
          placeholder="Digite sua mensagem aqui"
        ></textarea>
        <ButtonStyled
          width="200px"
          height="50px"
          textAlign="center"
          backgroundcolor="#0E1517"
          color="#ffffff"
          fontSize="1.6em"
          hover="#5F5F5F"
          borderRadius="8px"
        >
          Enviar
        </ButtonStyled>
      </Div>
    </ContactModalStyled>
  );
};
