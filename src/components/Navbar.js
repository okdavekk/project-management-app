import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const styles = {
  navbar: {
    display: "flex",
    marginLeft: 20,
    marginRight: 20,
    background: "#2f2f2f",
    justifyContent: 'center',

  },
  button: {
    display: "flex",
    background: "#9a74db",
    fontSize: "1.2rem",
    color: "white",
    alignItems: "center",
    borderRadius: 8,
    margin: 4,

  },
};

function Navbar({setPage}) {
  return (
    <nav className="button btn-group-toggle" data-toggle="buttons" style={styles.navbar}>
      <button className="button btn-secondary active" style={styles.button}
        href="#projectAboutMe" onClick={() => setPage('projectAboutMe')}>
          About Me
      </button>
      <button className="button"   style={styles.button}
        href="#projectPortfolio" onClick={() => setPage('projectPortfolio')}>
         Portfolio
      </button>
      <button className="button"  style={styles.button}
        href="#projectContact" onClick={() => setPage('projectContact')}>
         Contact
      </button>
      <button className="button"   style={styles.button}
        href="#projectResume" onClick={() => setPage('projectResume')}>
         Resume
      </button>
    </nav>
  );
}

export default Navbar;
