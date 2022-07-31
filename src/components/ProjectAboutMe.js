import React from "react";
import Pic from "./Assets/pic.png";
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


  }
};

function Card() {
  return (
    <div style={styles.card}>
      <h1 style={styles.heading}>About Me</h1>
      <div style={styles.content}>
        <div style={styles.picture}>
        <img style={styles.image} src={Pic} alt="Me" />
        </div>
        <p>
          I am a current student but started a consulting company recently related to UAS / Drones.  More to follow when I want to present this project.
        </p>
      </div>
    </div>
  );
}

export default Card;
