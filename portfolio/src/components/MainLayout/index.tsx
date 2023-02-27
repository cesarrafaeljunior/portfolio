import { Outlet } from "react-router-dom";
import { Main } from "../common/Main";
export const MainLayout = () => {
  return (
    <Main>
      <Outlet />
    </Main>
  );
};
