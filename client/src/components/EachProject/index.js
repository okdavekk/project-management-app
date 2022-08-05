import React from "react";
import { Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";
import UpdateButton from "./UpdateButton";

const styles = {
  card: {
    display: "flex",
    textAlignVertical: "center",
    marginTop: 20,
    marginBottom: 20,
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
    paddingTop: 12,
    fontSize: 20,
  },
  buttonView: {
    display: "flex",
    flexDirection: "row",
    background: "#21ffb1",
    fontSize: "1.2rem",
    color: "black",
    alignItems: "center",
    borderRadius: 8,
    margin: 4,
    padding: 4,
    textDecoration: "none",
  },

};

function EachProject({ project }) {
  return (
    <div style={styles.card}>
      <Link to={`/projectId/${project._id}`} style={styles.buttonView}>View</Link>
      <UpdateButton projectId={project._id}/>
      <DeleteButton projectId={project._id} />
      <h3 style={styles.h3}>Project Title: {project.name}   </h3>
      <div style={styles.navbar}></div>
    </div>
  );
}

export default EachProject;
