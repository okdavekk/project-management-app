import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_PROJECT } from "../utils/queries";
import { useParams } from 'react-router-dom';



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


function Card() {
  const { id } = useParams();
  console.log(id)
  const { data } = useQuery(QUERY_SINGLE_PROJECT, {
    variables: {id: id}
  });

  console.log(data)
  const project = data?.project || {name: "Unavailable", projectDescription: "Unavailable"};
  console.log("project", project)
  return (
    <div style={styles.card}>
      <h1 className="d-flex align-items-center" style={styles.heading}>
        {project.name}
      </h1>
      <h3 style={styles.content} >Project Description: {project.projectDescription}</h3>
    </div>
  );
}

export default Card;