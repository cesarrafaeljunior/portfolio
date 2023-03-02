import { useState } from "react";
import { Outlet } from "react-router-dom";
import { MenuNav } from "../../components/MenuNav";
import { MainLayoutStyled } from "./style";
import OpenArrow from "../../assets/img/icons/closeArror-2.png";
export const MainLayout = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<Boolean>(true);
  const [animationEntrance, setAnimationEntrance] =
    useState<String>("entrance");

  return (
    <MainLayoutStyled>
      <MenuNav />
      {/* <Outlet /> */}
    </MainLayoutStyled>
  );
};
