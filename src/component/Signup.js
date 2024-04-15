import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  const history = useNavigate();
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const host = "http://localhost:5000";
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //save the authtoken and redirect
      localStorage.setItem("token", json.authtoken);
      history("/");
      props.showAlert("Account created successfully", "success");
    } else {
      props.showAlert("Invalid details", "danger");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlfor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            aria-describedby="emailHelp"
            onChange={onChange}
            value={credentials.name}
          />
        </div>
        <div className="mb-3">
          <label htmlfor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            onChange={onChange}
            value={credentials.email}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlfor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={onChange}
            value={credentials.password}
            required
            minLength={5}
          />
        </div>
        <div className="mb-3">
          <label htmlfor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="cpassword"
            className="form-control"
            id="cpassword"
            name="cpassword"
            onChange={onChange}
            value={credentials.cpassword}
            required
            minLength={5}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
