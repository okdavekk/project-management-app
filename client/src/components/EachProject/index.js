import React from "react";
import {Link} from "react-router-dom"



const styles = {
  card: {
    display: "flex",
    textAlignVertical: "center",
    // margin: 20,
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
  h3: {
    textAlignVertical: "center",
    marginBottom: -8,
    testAlign: "center",
    paddingTop: 5,
  },
};

function EachProject({project}) {

  return (
    <div style={styles.card}>
      <Link to={`/projectId/${project._id}`} style={styles.button}>Click to View {project.name}</Link> 
      <h3 style={styles.h3}> Manager: {project.projectLeader}</h3>
      <div style={styles.navbar}>
      </div>
      </div>
 

  )
}

export default EachProject;
