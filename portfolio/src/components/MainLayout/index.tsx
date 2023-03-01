import { useState } from "react";
import { Outlet } from "react-router-dom";
import { MenuNav } from "../MenuNav";
import { MainLayoutStyled } from "./style";
import OpenArrow from "../../assets/img/icons/closeArror-2.png";
export const MainLayout = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<Boolean>(true);
  const [animationEntrance, setAnimationEntrance] =
    useState<String>("entrance");

  return (
    <MainLayoutStyled>
      {isOpenMenu ? (
        <MenuNav
          isOpenMenu={isOpenMenu}
          setIsOpenMenu={setIsOpenMenu}
          animationEntrance={animationEntrance}
          setAnimationEntrance={setAnimationEntrance}
        />
      ) : (
        <img
          src={OpenArrow}
          alt="Assasins Icon"
          className="btn__openArrow"
          onClick={() => {
            setAnimationEntrance("entrance");
            setIsOpenMenu(!isOpenMenu);
          }}
        />
      )}
      <Outlet />
    </MainLayoutStyled>
  );
};
