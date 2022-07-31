import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const foodGenieDeployed = "https://n3330.github.io/Food-Genie/";
const moviePreferencesDeployed = "https://shielded-waters-71876.herokuapp.com/";
const myPortfolioDeployed = "https://okdavekk.github.io/my-portfolio/";
const myWorkDaySchedulerDeployed =
  "https://okdavekk.github.io/work-day-scheduler/";
const textEditorDeployed = "https://desolate-beyond-67319.herokuapp.com/";
const seoRefactorDeployed = "https://okdavekk.github.io/seo-refactor/";

const foodGenieGithub = "https://github.com/N3330/Food-Genie";
const moviePreferencesGithub = "https://github.com/okdavekk/movie-preferences";
const myPortfolioGithub = "https://github.com/okdavekk/my-portfolio";
const myWorkDaySchedulerGithub =
  "https://github.com/okdavekk/work-day-scheduler";
const textEditorGithub = "https://github.com/okdavekk/text-editor";
const seoRefactorGithub = "https://github.com/okdavekk/seo-refactor";

const openInNewTab = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

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
    textAlign: "center",
  },
  content: {
    padding: 20,
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",

  },
  button: {
    display: "flex",
    background: "#9a74db",
    fontSize: "1.2rem",
    color: "white",
    alignItems: "center",
    borderRadius: 8,
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 8,
    marginBottom: 8,
  },
  input: {
    padding: 10,
    height: 200,
    width: "auto",
  },
  section: {
    margin: 25,
    maxWidth: 300,
    background: "#2f2f2f",
    borderRadius: 8,
    textAlign: "center",
    height: 400,
    minHeight: 200,
    width: 400,
  },
  subHeading: {
    fontWeight: 900,
    background: "#9a74db",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    alignItems: "center",
    textAlign: "center",
  },
};

function Card() {
  return (
    <div style={styles.card}>
      <h1 className="d-flex align-items-center" style={styles.heading}>
        Portfolio
      </h1>
      
      <div className="d-flex flex-wrap " style={styles.content}>
        <section style={styles.section}>
          <h4 style={styles.subHeading}>Food Genie</h4>
          <input
            style={styles.input}
            type="image"
            src={require("./Assets/foodGeniePic.png")}
            alt="Food Genie"
          ></input>
          <button
            style={styles.button}
            onClick={() => openInNewTab(foodGenieDeployed)}
          >
            Food Genie Deployed Site
          </button>
          <button
            style={styles.button}
            onClick={() => openInNewTab(foodGenieGithub)}
          >
            Food Genie Github
          </button>
        </section>

        <br></br>

        <section style={styles.section}>
          <h4 style={styles.subHeading}>Movie Preferences</h4>
          <input
            style={styles.input}
            type="image"
            src={require("./Assets/moviePreferencesPic.png")}
            alt="Movie Preferences"
          ></input>
          <button
            style={styles.button}
            onClick={() => openInNewTab(moviePreferencesDeployed)}
          >
            Movie Preferences Deployed Site
          </button>
          <button
            style={styles.button}
            onClick={() => openInNewTab(moviePreferencesGithub)}
          >
            Movie Preferences Github
          </button>
        </section>

        <br></br>

        <section style={styles.section}>
          <h4 style={styles.subHeading}>My HTML & CSS Portfolio</h4>
          <input
            style={styles.input}
            type="image"
            src={require("./Assets/myPortfolioPic.png")}
            alt="My Portfolio"
            onClick={() => openInNewTab(myPortfolioDeployed)}
          ></input>
          <button
            style={styles.button}
            onClick={() => openInNewTab(myPortfolioDeployed)}
          >
            My Portfolio Deployed Site
          </button>
          <button
            style={styles.button}
            onClick={() => openInNewTab(myPortfolioGithub)}
          >
            My Portfolio Github
          </button>
        </section>

        <br></br>

        <section style={styles.section}>
          <h4 style={styles.subHeading}>My Work Day Scheduler</h4>
          <input
            style={styles.input}
            type="image"
            src={require("./Assets/myWorkDaySchedulerPic.png")}
            alt="My Work Day Scheduler"
            onClick={() => openInNewTab(myWorkDaySchedulerDeployed)}
          ></input>
          <button
            style={styles.button}
            onClick={() => openInNewTab(myWorkDaySchedulerDeployed)}
          >
            My Work Day Scheduler Deployed Site
          </button>
          <button
            style={styles.button}
            onClick={() => openInNewTab(myWorkDaySchedulerGithub)}
          >
            My Work Day Scheduler Github
          </button>
        </section>

        <br></br>

        <section style={styles.section}>
          <h4 style={styles.subHeading}>Text Editor</h4>
          <input
            style={styles.input}
            type="image"
            src={require("./Assets/textEditorPic.png")}
            alt="Text Editor"
            onClick={() => openInNewTab(textEditorDeployed)}
          ></input>
          <button
            style={styles.button}
            onClick={() => openInNewTab(textEditorDeployed)}
          >
            Text Editor Deployed Site
          </button>
          <button
            style={styles.button}
            onClick={() => openInNewTab(textEditorGithub)}
          >
            Text Editor Github
          </button>
        </section>

        <br></br>

        <section style={styles.section}>
          <h4 style={styles.subHeading}>SEO Refactor</h4>
          <input
            style={styles.input}
            type="image"
            src={require("./Assets/seoRefactorPic.png")}
            alt="SEO Refactor"
            onClick={() => openInNewTab(seoRefactorDeployed)}
          ></input>
          <button
            style={styles.button}
            onClick={() => openInNewTab(seoRefactorDeployed)}
          >
            SEO Refactor Deployed Site
          </button>
          <button
            style={styles.button}
            onClick={() => openInNewTab(seoRefactorGithub)}
          >
            SEO Refactor Github
          </button>
        </section>
      </div>
    </div>
  );
}

export default Card;
