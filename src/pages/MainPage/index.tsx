import { useState } from "react";
import { Outlet } from "react-router-dom";
import { MenuNav } from "../../components/MenuNav";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { MainPageStyled } from "./style";

export const MainPage = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <MainPageStyled>
      <figure className="box__menu">
        {isOpenMenu ? (
          <AiOutlineClose
            className="menu_hamb"
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          />
        ) : (
          <AiOutlineMenu
            className="menu_hamb"
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          />
        )}
      </figure>
      {isOpenMenu && <MenuNav />}
      <MenuNav className="menu__hide" />
      <Outlet />
    </MainPageStyled>
  );
};
