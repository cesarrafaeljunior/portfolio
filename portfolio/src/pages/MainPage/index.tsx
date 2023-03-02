import { Outlet } from "react-router-dom";
import { MenuNav } from "../../components/MenuNav";
import { MainPageStyled } from "./style";

export const MainPage = () => {
  return (
    <MainPageStyled>
      <MenuNav />
      <Outlet />
    </MainPageStyled>
  );
};
