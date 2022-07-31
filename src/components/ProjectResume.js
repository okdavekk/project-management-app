import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import resume from "./Assets/resume.png";

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
      <h1 style={styles.heading}>Resume</h1>
      <div style={styles.content}>
        <h3>Skills</h3>
        <ul>
          <li>
            Ambiguity
          </li>
          <li>
            Tech Start-ups
          </li>
          <li>
            Aviation
          </li>
          <li>
            Drones
          </li>

        </ul>
        <p>
          ***I choose not to have my full resume downloadable to the public at this
          time. Sorry.
        </p>
        <a type="button" download="resume" href={resume}>
          Click To Download A Sample Resume
        </a>
      </div>
    </div>
  );
}

export default Card;
