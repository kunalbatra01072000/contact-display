import React, { useContext } from "react";
import PropTypes from "prop-types";
import contactContext from "../../Context/Contact/contactContext";
export const Contactitem = ({ contact }) => {
  const ContactContext = useContext(contactContext);
  const { deleteContact, setCurrent, clearCurrent } = ContactContext;
  const { _id, name, email, phone, type } = contact;

  const onDelete = () => {
    console.log(_id);
    deleteContact(_id);
    clearCurrent();
  };

  return (
    <div className="card bg-light">
      <h3 className="primary text-left">
        {name}{" "}
        <span
          style={{ float: "right" }}
          className={
            "badge " +
            (type === "professional" ? "badge-success" : "badge-primary")
          }
        >
          {type.charAt(0).toUpperCase() + type.substr(1)}
        </span>
      </h3>
      <ul className="list">
        {email && (
          <li>
            <i className="fa fa-envelope-open"></i>
            {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fa fa-phone"></i> {phone}
          </li>
        )}
      </ul>
      <p>
        <button
          className="btn btn-dark btn-sm"
          onClick={() => setCurrent(contact)}
        >
          Edit
        </button>
        <button className="btn btn-danger btn-sm " onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

Contactitem.propTypes = {
  contact: PropTypes.object.isRequired,
};
