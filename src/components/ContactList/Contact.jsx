import { IoPerson, IoCall } from "react-icons/io5";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";
import style from "./ContactList.module.css";
import { useDispatch } from "react-redux";
import { removeContact } from "../../redux/contacts/operations";
import { Button } from "@mui/material";

<Button />;

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <li className={style.item}>
      <div>
        <p className={style.parag}>
          <IoPerson /> {contact.name}
        </p>
        <p className={style.parag}>
          <IoCall /> {contact.number}
        </p>
      </div>
      <Button
        sx={{
          marginRight: "20px",
          "&:hover": {
            borderColor: "red",
            color: "red",
          },
        }}
        variant="outlined"
        startIcon={<DeleteForeverTwoToneIcon />}
        onClick={() => {
          dispatch(removeContact(contact.id));
        }}
      >
        Delete
      </Button>
    </li>
  );
}
