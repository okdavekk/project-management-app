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
    flexDirection: "row",
    background: "#ff706b",
    fontSize: "1.2rem",
    color: "white",
    alignItems: "center",
    borderRadius: 8,
    margin: 4,

  },
};

// TODO:  When you come to the page, only display About, Sign in, and Sign up.
// TODO:  When you are signed in only display Projects and Sign out
// TODO:  When you clock on Projects only display WBS, PN, Ghantt, and Sign out.
function Navbar({setPage}) {
  return (
 
    <nav >
         <div className="button btn-group-toggle" data-toggle="buttons" style={styles.navbar}>
      <button className="button btn-secondary active" style={styles.button}
        href="About" onClick={() => setPage('About')}>
          About
      </button>
      <button className="button"   style={styles.button}
        href="#Projects" onClick={() => setPage('Projects')}>
         Projects
      </button>
      <button className="button"  style={styles.button}
        href="#WBS" onClick={() => setPage('WBS')}>
         WBS
      </button>
      <button className="button"   style={styles.button}
        href="#PN" onClick={() => setPage('PN')}>
         PN
      </button>
      <button className="button"   style={styles.button}
        href="#Ghantt" onClick={() => setPage('Ghantt')}>
         Ghantt
      </button>
      </div>

      <div className="button btn-group-toggle" data-toggle="buttons" style={styles.navbar}>
      <button className="button"   style={styles.button}
        href="#SignIn" onClick={() => setPage('SignIn')}>
         Sign In
      </button>
      <button className="button"   style={styles.button}
        href="#SignUp" onClick={() => setPage('SignUp')}>
         Sign Up
      </button>
      <button className="button"   style={styles.button}
        href="#SignOut" onClick={() => setPage('SignOut')}>
         Sign Out
      </button>
      </div>
    </nav>
  );
}

export default Navbar;
