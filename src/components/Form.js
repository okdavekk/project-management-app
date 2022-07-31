import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { validateEmail } from "../utils/helpers";

const styles = {
  button: {
    display: "flex",
    background: "#9a74db",
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
};

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
    <div>
      <p>Hello Return Visitor {name}</p>
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
