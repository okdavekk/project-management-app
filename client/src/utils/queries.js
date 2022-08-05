import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_PROJECTS = gql`
  query getProjects {
    projects {
      _id
      name
      projectDescription
    }
  }
`;

// Projects have WBS, PNs, and GHANTTs
export const QUERY_SINGLE_PROJECT = gql`
  query getSingleProject($id: ID!) {
    project(id: $id) {
      _id
      name
      projectDescription
    }
  }
`;

