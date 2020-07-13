import React, { useState, useEffect, useContext } from "react";
import alertContext from "../../Context/Alert/alertContext";
import authContext from "../../Context/Auth/authContext";

const Login = (props) => {
  const AlertContext = useContext(alertContext);
  const { setAlert } = AlertContext;
  const AuthContext = useContext(authContext);
  const { loginUser, error, clearErrors, isAuthenticated } = AuthContext;
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
    if (error === "Invalid Credentials") {
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("Please fill in all forms", "danger");
    } else {
      loginUser({
        email,
        password,
      });
    }
  };
  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Login </span>{" "}
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
        </div>

        <input
          type="submit"
          className="btn btn-primary btn-block"
          value="Login"
        />
      </form>
    </div>
  );
};

export default Login;
