import { Link, Outlet } from "react-router-dom";
import { routes } from "../constants/routes";
import style from "../components/NavBar/NavBar.module.css"

export const PanelLayout = () => {
  return (
    <div>
      <h2>Panel layout</h2>
      <nav className={style.nav}>
        <Link to={routes.USER_INFO}>Информация о пользователе</Link>
        <Link to={routes.USER_SETTINGS}>Настройки пользователя</Link>
      </nav>
      <Outlet />
    </div>
  );
};
