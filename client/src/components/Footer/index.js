import React from "react";
import "bootstrap/dist/css/bootstrap.css";


const styles = {
  footer: {
    margin: 20,
    background: "#1f1f1f",
    color: "#ffffff",
    textAlign: "center",
    borderRadius: 8,
    display: "flex",
    justifyContent: "center"

  },
  h2: {
    fontSize: "2.0rem",
    marginTop: 10,
    marginBottom: 10,
  },

};


function Footer() {
  return (
    <footer style={styles.footer}>
      <h2 style={styles.h2}>PMA</h2>

    </footer>
  );
}

export default Footer;
