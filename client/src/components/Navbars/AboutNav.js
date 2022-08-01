import React from "react";
import { Link } from 'react-router-dom';
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
    flexDirection: "row",
    background: "#ff706b",
    fontSize: "1.2rem",
    color: "white",
    alignItems: "center",
    borderRadius: 8,
    margin: 4,
    padding: 4,
    textDecoration: "none",
  },
};

function Navbar() {
    return (
      <nav >
        <div style={styles.navbar}>
          <Link to="/SignIn" className="button"   style={styles.button}>
            Sign In
          </Link>
          <Link to="/SignUp" className="button"   style={styles.button}>
           Sign Up
          </Link>
        </div>
      </nav>
    );
  }
  
  export default Navbar;