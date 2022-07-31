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


function Navbar({setPage}) {
    return (
   
      <nav >
        <div className="button btn-group-toggle" data-toggle="buttons" style={styles.navbar}>
        <button className="button"   style={styles.button}
          href="#SignIn" onClick={() => setPage('SignIn')}>
           Sign In
        </button>
        </div>
      </nav>
    );
  }
  
  export default Navbar;