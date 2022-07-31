import React from "react";
import Form from './Form';

import "bootstrap/dist/css/bootstrap.css";

const styles = {
  card: {
    margin: 20,
    background: "#1f1f1f",
    borderRadius: 8,
  },
  heading: {
    fontWeight: 900,
    background: "#9a74db",
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
  },
};

function Card() {
  return (
    <div style={styles.card}>
      <h1 style={styles.heading}>Contact</h1>
      <div style={styles.content}>
<Form />
      </div>
    </div>
  );
}

export default Card;
