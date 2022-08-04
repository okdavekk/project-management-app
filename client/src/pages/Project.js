import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import WBSCard from "../components/WBS/index";
import PNCard from "../components/PN/index";
import GhanttCard from "../components/Ghantt";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_PROJECT } from "../../../client/src/utils/queries";



const styles = {
  card: {
    margin: 20,
    background: "#1f1f1f",
    borderRadius: 8,

  },
  heading: {
    fontWeight: 900,
    background: "#ff706b",    
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "2.0rem",
    padding: "0 20px",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    textAlign: "center",
  },
  content: {
    padding: 20,
    color: "white",
  },
};
//TODO: Query single project.. Look into useparams from react router dom. Every activity from unit 21.


// TODO: A project has a WBS, PN, and Ghantt
function Card() {
  const { data } = useQuery(QUERY_SINGLE_PROJECT);
  const project = data?.projects || [];
  return (
    <div style={styles.card}>
      <h1 className="d-flex align-items-center" style={styles.heading}>
        Project
      </h1>
      <h3 style={styles.content} >Project Name: {project.name}   Manager: {project.projectLeader}</h3>
      <WBSCard></WBSCard>
      <PNCard></PNCard>
      <GhanttCard></GhanttCard>
    </div>
  );
}

export default Card;