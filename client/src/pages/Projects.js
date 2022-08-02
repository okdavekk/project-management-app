import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import EachProject from "../components/Projects/projects";
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
  return (
    <div style={styles.card}>
      <h1 className="d-flex align-items-center" style={styles.heading}>
        Projects
      </h1>
      <EachProject></EachProject>
    </div>
  );
}

export default Card;
