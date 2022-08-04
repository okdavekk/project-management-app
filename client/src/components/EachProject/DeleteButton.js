import React from "react";
// import { Link } from "react-router-dom";

const styles = {
  buttonDelete: {
    display: "flex",
    flexDirection: "row",
    background: "#ff4e6e",
    fontSize: "1.2rem",
    color: "black",
    alignItems: "center",
    borderRadius: 8,
    margin: 4,
    padding: 4,
    textDecoration: "none",
  },
};

function DeleteProject() {
  return (
    <button style={styles.buttonDelete} tpye="submit">
      Delete
    </button>
  );
}

export default DeleteProject;
