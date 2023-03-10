import { IInputComponent } from "../../../interfaces/components";
import { InputStyled } from "./style";

export const Input = ({ placeholder }: IInputComponent) => {
  return <InputStyled placeholder={placeholder}></InputStyled>;
};
