import { routes } from "../../constants/routes";
// import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useCurrentCounter } from "../../hooks/userCurrentCounter";

export default function NavBar() {
  const classSelector = ({isActive}: {isActive:boolean})=> {
    return isActive ? "nav-link-active" : "nav-link"
  }
  const {user, setIsAuthorized, isAuthorized} = useCurrentUser();
  const {counter} = useCurrentCounter();
  function handleLogout() {
      setIsAuthorized(false);
  }

  return (
    <div>
      NavBar component
      {/* <nav className={style.navBar}> */}
      <nav className="flex justify-center items-center flex-wrap gap-4 bg-pink-200 min-h-14">
        <NavLink to={routes.HOME} className={classSelector}>Home</NavLink>
        <NavLink to={routes.TOGGLE_CARD} className={classSelector}>Toggle card</NavLink>
        <NavLink to={routes.GALLERY} className={classSelector}>Gallery</NavLink>
        <NavLink to={routes.CONTACT} className={classSelector}>Contact</NavLink>
        <NavLink to={routes.PRODUCTS} className={classSelector}>Products</NavLink>
        <NavLink to={routes.PRODUCTS_CREATE} className={classSelector}>Create Product</NavLink>
        <NavLink to={"/users"} className={classSelector}>Users</NavLink>
        <NavLink to={routes.ABOUT} className={classSelector}>About</NavLink>
        <NavLink to={routes.USER_INFO} className={classSelector}>User info</NavLink>
        <NavLink to={routes.USER_SETTINGS} className={classSelector}>User settings</NavLink>
        <NavLink to={routes.REGISTRATION} className={classSelector}>Регистрация</NavLink>
        <NavLink to={"/login"} className={classSelector}>Log in</NavLink>
        <NavLink to={routes.COUNTER} className={classSelector}>Счётчик</NavLink>
        {user?.email}
        {counter}
       {/* <NavLink to={routes.GENDER_PREDICTOR} className={classSelector}>Пол</NavLink>
        <NavLink to={routes.AGE_PREDICTOR} className={classSelector}>Возраст</NavLink>
        <NavLink to={routes.DEMO} className={classSelector}>Демо</NavLink>
        <NavLink to={routes.SPACE_MISSION} className={classSelector}>Миссия</NavLink>
        <NavLink to={routes.WEIGHT_CALCULATOR} className={classSelector}>Вес</NavLink>
        <NavLink to={routes.PERSONAL_GREETING} className={classSelector}>Приветствие</NavLink>

        <NavLink to={routes.PONY} className={classSelector}>Pony</NavLink> */}
        {isAuthorized ? (<button type="button" onClick={handleLogout}>Logout</button>): null}
      
      </nav>
    </div>
  );
}
