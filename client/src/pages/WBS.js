import React from "react";
import WBSCode from "../components/WBS";
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
  },
  content: {
    padding: 20,
  },
};

function Card() {
  return (
    <div style={styles.card}>
      <h1 style={styles.heading}>Work Breakdown Structure</h1>
      <div style={styles.content}>
        <WBSCode />
      </div>
    </div>
  );
}

export default Card;
