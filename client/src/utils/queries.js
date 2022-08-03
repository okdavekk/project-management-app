// TODO: Got to look into these more

import { gql } from '@apollo/client';

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
    projectLeader
    }
  }
`;

// Projects have WBS, PNs, and GHANTTs
// export const QUERY_SINGLE_PROJECT = gql`
//   query getSingleProject($args.id: _id!)
//   }
// `;

// export const QUERY_WBS = gql`
//   query getWBS{
//   }
  
// `;

// export const QUERY_PN = gql`
//   query getPN{
//   }
  
// `;

// export const QUERY_GHANT = gql`
//   query getGhantt{
//   }
// `;







// TODO: What is this all about?
export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        thoughtAuthor
        createdAt
      }
    }
  }
`;