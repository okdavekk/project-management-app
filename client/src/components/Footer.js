import React from "react";
import "bootstrap/dist/css/bootstrap.css";


const styles = {
  footer: {
    margin: 20,
    background: "#1f1f1f",
    color: "#ffffff",
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 8,
    display: "flex",
    justifyContent: "center"

  },
  h2: {
    fontSize: "2.0rem",
    marginTop: 20,
    marginRight: 20,
    marginBottom: 20,
    marginLeft: 4,
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
