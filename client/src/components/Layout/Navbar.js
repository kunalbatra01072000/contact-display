import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import authContext from "../../Context/Auth/authContext";
import contactContext from "../../Context/Contact/contactContext";
const Navbar = ({ title, icon }) => {
  const AuthContext = useContext(authContext);
  const ContactContext = useContext(contactContext);

  const { isAuthenticated, logoutUser, user } = AuthContext;
  const { clearContacts } = ContactContext;
  const onLogout = (e) => {
    logoutUser();
    clearContacts();
  };
  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <a onClick={onLogout} href="#!">
          <i className="fas fa-sign-out-alt"></i>
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Sign In</Link>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon}></i>
        {title}
      </h1>
      <ul>{isAuthenticated === true ? authLinks : guestLinks}</ul>
    </div>
  );
};
Navbar.prototype = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};
Navbar.defaultProps = {
  title: "Contact Keeper",
  icon: "fa fa-address-book",
};
export default Navbar;
