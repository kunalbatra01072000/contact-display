import React, { useContext, useEffect } from "react";
import Contacts from "../Contacts/Contacts";
import Contactform from "../Contacts/Contactform";
import { Contactfilter } from "../Contacts/Contactfilter";
import authContext from "../../Context/Auth/authContext";

const Home = (props) => {
  const AuthContext = useContext(authContext);
  useEffect(() => {
    AuthContext.loadUser();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="grid-2">
      <div>
        <Contactform />
      </div>
      <div>
        <Contactfilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
