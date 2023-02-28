import { Outlet } from "react-router-dom";
import { MainLayoutStyled } from "./style";
export const MainLayout = () => {
  return (
    <MainLayoutStyled>
      <Outlet />
    </MainLayoutStyled>
  );
};
