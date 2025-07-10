import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

export const MainLayout = () => {
  return (
    <>
      <header>
        <h2>Main layout</h2>
        <NavBar />
      </header>

      <Outlet />

      <footer>
        <a href="">Instagram</a>
      </footer>
    </>
  );
};
