import { Link, Outlet } from "react-router-dom";
import { routes } from "../constants/routes";

export const PonyLayout = () => {
  return (
    <div>
      <h2>Pony layout</h2>
      <nav>
        <Link to={routes.PONY_MY}>My pony</Link>
        <Link to={routes.PONY_BUY}>Buy pony</Link>
      </nav>
      <Outlet />
    </div>
  );
};
