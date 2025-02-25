// import React from "react";
import s from "./ContactList..module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import {
  // selectContacts,
  selectFilteredContacts,
} from "../../redux/contactsSlice";
// import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  // const contacts = useSelector(selectContacts);
  // const filter = useSelector(selectNameFilter);
  // console.log("Contacts:", contacts);
  // console.log("Filter:", filter);

  // const filteredContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter || "".toLowerCase())
  // );

  return (
    <div className={s.div}>
      <ul className={s.list}>
        {filteredContacts.map((contact) => (
          <li className={s.item} key={contact.id}>
            <Contact {...contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
