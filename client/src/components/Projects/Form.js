import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_PROJECT } from "../../utils/mutations";

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

function Form() {
  const [project, setproject] = useState();
  const [formState, setFormState] = useState({
    name: "",
    projectLeader: "",
  });
  const [addProject, { error }] = useMutation(ADD_PROJECT);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { name, value } = addProject({
        variables: { ...formState },
      });

      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({ ...formState, [name]: value });
    console.log(formState);
  };
  return (
    <form
      style={styles.content}
      onSubmit={handleFormSubmit}
    >
      <input style={styles.input}
          name="name"
          placeholder="Name the Project"
          value={formState.name}
          className="form-input w-100"
          onChange={handleChange}
      />
      <input style={styles.input}
          name="projectLeader"
          placeholder="Who is the Project Manager?"
          value={formState.projectLeader}
          className="form-input w-100"
          onChange={handleChange}
        />

      
        <button className="button" style={styles.button} type="submit">
          Add Project
        </button>
      {error && (
        <div className="col-12 my-3 bg-danger text-white p-3">
          Something went wrong...
        </div>
      )}
    </form>
  );
}

export default Form;
