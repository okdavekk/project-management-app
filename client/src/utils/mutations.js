// TODO: Fill in the blanks
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


export const UPDATE_PROJECT = gql`
  mutation updateProject($name: String!, $projectDescription: String!) {
    updateProject(name: $name, projectDescription: $projectDescription) {
      _id
      name
      projectDescription
    }
  }
`;

export const DELETE_PROJECT = gql`
  mutation removeProject($ProjectId: String!) {
    removeProject(ProjectId: $ProjectId) {
      _id
      name
      projectDescription
    }
  }
`;


// export const DELETE_PROJECT = gql`
//   mutation removeProject($name: String!, $projectDescription: String!) {
//     removeProject(name: $name, projectDescription: $projectDescription) {
//       _id
//       name
//       projectDescription
//     }
//   }
// `;

// export const ADD_WBS = gql`

// `;

// export const ADD_PN = gql`

// `;
// export const ADD_GHANTT = gql`

// `;
