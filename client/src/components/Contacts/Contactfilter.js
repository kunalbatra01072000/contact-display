import React, { useContext, useRef, useEffect } from "react";
import contactContext from "../../Context/Contact/contactContext";
export const Contactfilter = () => {
  const ContactContext = useContext(contactContext);
  const { filterContacts, clearFilter, filtered } = ContactContext;
  const text = useRef("");
  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });
  const onChange = (e) => {
    if (text.current.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <form>
      <input
        type="text"
        ref={text}
        placeholder="Filter Contacts..."
        onChange={onChange}
      />
    </form>
  );
};
