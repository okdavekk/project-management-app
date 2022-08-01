// TODO: fix all of the below for sign in
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
// import Auth from "../utils/auth";
// import { useMutation } from "@apollo/client";
// import { LOGIN_USER } from "../utils/mutations";

const styles = {
  button: {
    display: "flex",
    background: "#ff706b",
    fontSize: "1.2rem",
    color: "white",
    alignItems: "center",
    borderRadius: 8,
    margin: 4,
    cursor: "pointer",
  },
  input: {
    padding: 10,
    borderRadius: 8,
    margin: 4,
  },
  card: {
    margin: 20,
    background: "#1f1f1f",
    borderRadius: 8,
  },
  heading: {
    fontWeight: 900,
    background: "#ff706b",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "2.0rem",
    padding: "0 20px",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  content: {
    padding: 20,
    color: "white",
  },
};

// TODO: fix all of the below for sign in
const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  // const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      // const { data } = await login({
      // variables: { ...formState },
      // });
      // Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <div style={styles.card}>
      <h1 style={styles.heading}>Sign In</h1>

      <form style={styles.input} onSubmit={handleFormSubmit}>
        <input
        style={styles.input}
          className="form-input"
          placeholder="Your email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
        />
        <input
        style={styles.input}
          className="form-input"
          placeholder="******"
          name="password"
          type="password"
          value={formState.password}
          onChange={handleChange}
        />
        <button
          className="button"
          style={styles.button}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
