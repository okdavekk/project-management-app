import React from "react";
import { useMutation } from "@apollo/client";

import { DELETE_PROJECT } from "../../utils/mutations";
import { QUERY_PROJECTS } from "../../utils/queries";

const styles = {
  buttonDelete: {
    display: "flex",
    flexDirection: "row",
    background: "#ff4e6e",
    fontSize: "1.2rem",
    color: "black",
    alignItems: "center",
    borderRadius: 8,
    margin: 4,
    padding: 4,
    textDecoration: "none",
  },
};
// let project =props.project
const DeleteProject = ({ projectId, isLoggedInUser = false }) => {
  const [removeProject, { error }] = useMutation(DELETE_PROJECT);

  const handleDeleteProject = async (projectId) => {
    try {
      await removeProject({
        variables: { id:projectId },
      });
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button
      style={styles.buttonDelete}
      onClick={() => handleDeleteProject(projectId)}
    >
      Delete
    </button>
  );
};

export default DeleteProject;
