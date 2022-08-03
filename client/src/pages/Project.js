import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const styles = {
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
    textAlign: "center",
  },
  content: {
    padding: 20,
    color: "white",
  },
};

// TODO: A project has a WBS, PN, and Ghantt
function Card(project) {
  return (
    <div style={styles.card}>
      <h1 className="d-flex align-items-center" style={styles.heading}>
        Project
      </h1>
      <h3 style={styles.content} >Project Name: {project.name}   Manager: {project.projectLeader}</h3>
      
    </div>
  );
}

export default Card;