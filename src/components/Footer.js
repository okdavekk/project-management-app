import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const gitHub = "https://github.com/okdavekk";
const linkedIn = "https://www.linkedin.com/in/david-k-661636192/";
const stackOverflow = "https://stackoverflow.com/users/18550521/david-kemp";

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
  button: {
    display: "flex",
    background: "#9a74db",
    fontSize: "1.2rem",
    color: "white",
    alignItems: "center",
    borderRadius: 8,
  },
};

const openInNewTab = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};


function Footer() {
  return (
    <footer style={styles.footer}>
      <h2 style={styles.h2}>Links:</h2>
      <button   style={styles.button}
        onClick={() => openInNewTab(gitHub)}>
        GitHub
      </button>

      <button   style={styles.button}
        onClick={() => openInNewTab(stackOverflow)}>
        Stack Overflow
      </button>



      <button   style={styles.button}
        onClick={() => openInNewTab(linkedIn)}>
        LinkedIn
      </button>

    </footer>
  );
}

export default Footer;
