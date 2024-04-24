import { NavLink } from "react-router-dom";
import style from "./AuthNav.module.css";
export default function AuthNav() {
  return (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${style.li} ${style.active}` : style.li
        }
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${style.li} ${style.active}` : style.li
        }
        to="/login"
      >
        Login
      </NavLink>
    </>
  );
}
