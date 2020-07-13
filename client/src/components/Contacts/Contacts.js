import React, { useContext, Fragment, useEffect } from "react";
import contactContext from "../../Context/Contact/contactContext";
import { Contactitem } from "./Contactitem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Spinner from "../Layout/Spinner";

const Contacts = () => {
  const ContactContext = useContext(contactContext);
  const { contacts, filtered, getContact, loading } = ContactContext;
  useEffect(() => {
    getContact();
    // eslint-disable-next-line
  });
  if (contacts != null && contacts.length === 0 && !loading) {
    return <h4>Please add a contact</h4>;
  }

  return (
    <Fragment>
      {contacts != null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map((contact) => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames="item"
                >
                  <Contactitem contact={contact} />
                </CSSTransition>
              ))
            : contacts.map((contact) => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames="item"
                >
                  <Contactitem contact={contact} />
                </CSSTransition>
              ))}
          ;
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Contacts;
