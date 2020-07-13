import React, { useState, useContext, useEffect } from "react";
import contactContext from "../../Context/Contact/contactContext";

const Contactform = () => {
  const ContactContext = useContext(contactContext);
  const { addContact, current, clearCurrent, updateContact } = ContactContext;
  const [contact, setcontact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });
  useEffect(() => {
    if (current !== null) {
      setcontact(current);
    } else {
      setcontact({
        name: "",
        email: "",
        phone: "",
        type: "personal",
      });
    }
  }, [current]);

  const { name, email, phone, type } = contact;

  const onChange = (e) => {
    setcontact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }

    setcontact({
      name: "",
      email: "",
      phone: "",
      type: "personal",
    });
  };
  const clearAll = () => {
    clearCurrent();
  };
  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">
        {current ? "Edit Contact" : "Add Contact"}
      </h2>
      <input
        type="text"
        name="name"
        placeholder="name"
        value={name}
        onChange={onChange}
      />
      <input
        type="email"
        name="email"
        placeholder="email"
        value={email}
        onChange={onChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="phone"
        value={phone}
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <input
        type="radio"
        name="type"
        value="personal"
        defaultChecked={type === "personal"}
      />{" "}
      Personal{" "}
      <input
        type="radio"
        name="type"
        value="professional"
        defaultChecked={type === "professional"}
        onChange={onChange}
      />{" "}
      Professional
      <div className="">
        <input
          type="submit"
          value={current ? "Update Contact" : "Add Contact"}
          onChange={onChange}
          className="btn btn-primary btn-block"
        />
      </div>
      {current && (
        <div>
          <button className="btn btn-light btn-block" onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default Contactform;
