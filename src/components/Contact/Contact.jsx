// import React from "react";
import s from "./Contact.module.css";
import { FaUserAlt } from "react-icons/fa";

import { FaPhone } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps.js";
const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <div className={s.contact}>
      <div className={s.info}>
        <p className={s.name}>
          <FaUserAlt className="my-icon" size="14" />
          {name}
        </p>
        <p className={s.number}>
          <FaPhone className="my-icon" size="14" /> {number}
        </p>
      </div>
      <button onClick={() => dispatch(deleteContact(id))} className={s.button}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
