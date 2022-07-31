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
    // color: "white",
    padding: "0 20px",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  content: {
    padding: 20,
    color: "white",
    textAlign: "justify",
  },
};

function Card() {
  return (
    <div style={styles.card}>
      <h1 style={styles.heading}>About</h1>
        <div style={styles.content}>
        <p>
          This is a simple to use project management app that allows you to create Projects with Work Breakdown Structures, Project Networks, and Ghantt Charts.  
        </p>
        </div>
    </div>
  );
}

export default Card;
