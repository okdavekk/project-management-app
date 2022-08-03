import React from "react";
import {Link} from "react-router-dom"



const styles = {
  card: {
    margin: 20,
    background: "#1f1f1f",
    borderRadius: 8,
    color: "white",
  },
};

function EachProject({project}) {

  return (
    <div style={styles.card}>
      <h3>Project Name: {project.name} Manager: {project.projectLeader}</h3>
      <Link to={`/projectId/${project._id}`}>See project: {project.name}</Link> 

    </div>
  )
}

export default EachProject;
