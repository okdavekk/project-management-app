import React from "react";

const styles = {
  card: {
    margin: 20,
    background: "#1f1f1f",
    borderRadius: 8,
    color: "white",
  },
};

function EachProject() {
  return (
    <div style={styles.card}>
      <div>
        <h3>Project Name Placeholder</h3>
      </div>

      <div>
        <h3>Another Sample</h3>
      </div>
    </div>
  );
}

export default EachProject;
