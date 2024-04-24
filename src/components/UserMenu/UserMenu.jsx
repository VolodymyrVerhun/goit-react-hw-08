import { useDispatch, useSelector } from "react-redux";

import Button from "@mui/material/Button";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

export default function UserMenu() {
  const userData = useSelector(selectUser);
  const dispatch = useDispatch();
  const onLogOut = () => {
    dispatch(logout());
  };
  return (
    <>
      <span style={{ margin: "20px", fontSize: "25px" }}>
        Hello, {userData.name}
      </span>
      <Button
        sx={{
          marginLeft: "20px",
        }}
        variant="contained"
        onClick={() => onLogOut()}
        type="button"
      >
        LogOut
      </Button>
    </>
  );
}
