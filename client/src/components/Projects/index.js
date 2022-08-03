import React from "react";
// import {Link} from "react-router-dom"



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
    <li>
      <img src="https://placehold.it/200/200" alt="test"></img>
      <h3>id: {project._id}  name: {project.name}   manager: {project.projectLeader}</h3>
      {/* <Link to={`/projectId/${project._id}`}>See project</Link>  */}

    </li>
  )
}

export default EachProject;
