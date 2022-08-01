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
  },
  content: {
    padding: 20,
    color: "white",
    textAlign: "justify",
  },
  image: {
    height: 200,
    padding: 20,
    margin: "auto",
    maxWidth: 300,
    background: "#2f2f2f",
    borderRadius: 8,
    textAlign: "center",
  },
  picture: {
    textAlign: "center",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
};

function Card() {
  return (
    <div style={styles.card}>
      <div style={styles.content}></div>
    </div>
  );
}

export default Card;
