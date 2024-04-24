import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css";
export default function Navigation() {
  const isUserIsLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${style.li} ${style.active}` : style.li
        }
        to="/"
      >
        Home
      </NavLink>
      {isUserIsLoggedIn && (
        <NavLink
          className={({ isActive }) =>
            isActive ? `${style.li} ${style.active}` : style.li
          }
          to="/contacts"
        >
          Contacts
        </NavLink>
      )}
    </>
  );
}
