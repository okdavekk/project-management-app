// import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import EachProject from "../components/Projects";
import Form from "../components/Form/Form";
import { useQuery } from "@apollo/client";
import { QUERY_PROJECTS } from "../../../client/src/utils/queries";

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
};

// TODO: Call in Projects building util or place here.  The area may need to be in its own scroll type deal.

function Card() {
  const { data } = useQuery(QUERY_PROJECTS);
  const projects = data?.projects || [];
  return (
    <div style={styles.card}>
      <h1 className="d-flex align-items-center" style={styles.heading}>
        Projects
      </h1>
      <Form></Form>

      <div style={styles.card}>
        <div>
          <div className="col-12 col-md-8 mb-3">
            <ul>
              {projects.length > 0 &&
                projects.map((project, index) => (
                  <EachProject project={project} />
                ))}
            </ul>
          </div>
        </div>

        <div>
          <h3>{}</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
