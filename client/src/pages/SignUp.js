// TODO: fix all of the below for sign up
import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

import Auth from "../utils/auth";
import "bootstrap/dist/css/bootstrap.css";

const styles = {
  button: {
    display: "flex",
    background: "#ff706b",
    fontSize: "1.2rem",
    color: "white",
    alignItems: "center",
    borderRadius: 8,
    margin: 4,
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

// TODO: fix all of the below for sign up
const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div style={styles.card}>
      <h1 style={styles.heading}>Sign Up</h1>
      {data ? (
        <h1>
          ....Redirect to Projects....
        </h1>
      ) : (
        <form style={styles.content} onSubmit={handleFormSubmit}>
          <input
            style={styles.input}
            placeholder="Username?"
            name="username"
            type="text"
            value={formState.name}
            onChange={handleChange}
          />
          <input
            style={styles.input}
            placeholder="Email?"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
          />
          <input
            style={styles.input}
            placeholder="Password?"
            name="password"
            type="password"
            value={formState.password}
            onChange={handleChange}
          />
          <button className="button" style={styles.button} type="submit">
            Submit
          </button>
        </form>
      )}

      {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
    </div>
  );
};

export default Signup;
