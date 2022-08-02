// TODO: Fill in the blanks
import { gql } from '@apollo/client';



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
  mutation addProject($name: String!, $projectLeader: String!) {
  addProject(name:$name, projectLeader:$projectLeader){
  project {
  _id
  name
  projectLeader
  }
  }}
`;

// export const ADD_WBS = gql`

// `;

// export const ADD_PN = gql`

// `;
// export const ADD_GHANTT = gql`

// `;
