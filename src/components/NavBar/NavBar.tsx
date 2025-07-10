import { Link } from "react-router-dom";
import { routes } from "../../constants/routes";
import style from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div>
      NavBar component
      <nav className={style.nav}>
        <Link to={routes.HOME}>Home</Link>
        <Link to={routes.CONTACT}>Contact</Link>
        <Link to={routes.ABOUT}>About</Link>
        <Link to={routes.USER_INFO}>User info</Link>
        <Link to={routes.USER_SETTINGS}>User settings</Link>
        <Link to={routes.REGISTRATION}>Регистрация</Link>
        <Link to={routes.GENDER_PREDICTOR}>Пол</Link>
        <Link to={routes.AGE_PREDICTOR}>Возраст</Link>
        <Link to={routes.DEMO}>Демо</Link>
        <Link to={routes.SPACE_MISSION}>Миссия</Link>
        <Link to={routes.WEIGHT_CALCULATOR}>Вес</Link>
        <Link to={routes.PERSONAL_GREETING}>Приветствие</Link>
        <Link to={routes.COUNTER}>Счётчик</Link>
        <Link to={routes.PONY}>Pony</Link>
      </nav>
    </div>
  );
}
