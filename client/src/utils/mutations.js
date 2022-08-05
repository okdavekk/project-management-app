import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_PROJECT = gql`
  mutation addProject($name: String!, $projectDescription: String!) {
    addProject(name: $name, projectDescription: $projectDescription) {
      _id
      name
      projectDescription
    }
  }
`;

export const DELETE_PROJECT = gql`
  mutation removeProject($id: ID!) {
    removeProject(id: $id) {
      _id
      username
      email
      savedProjects {
        _id
        name
        projectDescription
      }
    }
  }
`;

