import { useSelector } from "react-redux";
import Contact from "./Contact";
import style from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/slice";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <div className={style.list_container}>
      <ul className={style.list}>
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
}
