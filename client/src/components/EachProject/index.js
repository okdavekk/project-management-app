import React from "react";
import {Link} from "react-router-dom"



const styles = {
  card: {
    margin: 20,
    background: "#1f1f1f",
    borderRadius: 8,
    color: "white",
  },
  button: {
    display: "flex",
    flexDirection: "row",
    background: "#ff706b",
    fontSize: "1.2rem",
    color: "white",
    alignItems: "center",
    borderRadius: 8,
    margin: 4,
    padding: 4,
    textDecoration: "none",
  },
};

function EachProject({project}) {

  return (
    <div style={styles.card}>
      <h3>Project Name: {project.name} Manager: {project.projectLeader}</h3>
      <div style={styles.navbar}>
      <button style={styles.button}>
      <Link to={`/projectId/${project._id}`}>See project: {project.name}</Link> 
      </button>
      </div>

    </div>
  )
}

export default EachProject;
