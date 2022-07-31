// TODO: fix all of the below for sign up
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { validateEmail } from "../utils/helpers";

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
function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
    }
    if (inputType === "email") {
      setEmail(inputValue);
    }
    if (inputType === "message") {
      setMessage(inputValue);
    }
    
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      alert("Email is invalid");
      return;
    }

    setName("");
    setEmail("");
    setMessage("");
    alert(`Hello: ${name}.  Thank you for adding your valid Email: ${email} and the Message: ${message}`);
  };

  return (
    <div style={styles.card}>
      <h1 style={styles.heading}>Sign Up</h1>

      <form className="form">
        <input
          style={styles.input}
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />

        <input
          style={styles.input}
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          // email="text"
          placeholder="email"
        />

        <input
          style={styles.input}
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="message"
        />

        <button style={styles.button} onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;