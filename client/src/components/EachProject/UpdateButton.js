import React from "react";
// import { Link } from "react-router-dom";

const styles = {
  buttonUpdate: {
    display: "flex",
    flexDirection: "row",
    background: "#8093ff",
    fontSize: "1.2rem",
    color: "black",
    alignItems: "center",
    borderRadius: 8,
    margin: 4,
    padding: 4,
    textDecoration: "none",
  },
};

function UpdateProject() {
  return (
    <button style={styles.buttonUpdate} tpye="submit">
      Update
    </button>
  );
}

export default UpdateProject;
