import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";

import style from "./AppBar.module.css";

export default function AppBar() {
  const isUserIsLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className={style.header}>
      <Navigation />
      {isUserIsLoggedIn ? (
        <>
          <UserMenu />
        </>
      ) : (
        <AuthNav />
      )}
    </header>
  );
}
