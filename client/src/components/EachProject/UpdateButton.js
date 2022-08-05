import React from "react";
import { useMutation } from "@apollo/client";

import { UPDATE_PROJECT } from "../../utils/mutations";
import { QUERY_ME } from "../../utils/queries";

const styles = {
  buttonUpdate: {
    display: "flex",
    flexDirection: "row",
    background: "#8093ff",
    fontSize: "1.2rem",
    color: "black",
    alignItems: "center",
    borderRadius: 8,
    margin: 4,
    padding: 4,
    textDecoration: "none",
  },
};

const UpdateProject = ({ project, isLoggedInUser = false }) => {
  const [updateProject, { error }] = useMutation(UPDATE_PROJECT, {
    update(cache, { data: { updateProject } }) {
      try {
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: updateProject },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleUpdateProject = async (project) => {
    try {
      const { data } = await updateProject({
        variables: { project },
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button
      style={styles.buttonUpdate}
      onClick={() => handleUpdateProject(project)}
    >
      Update
    </button>
  );
};

export default UpdateProject;

