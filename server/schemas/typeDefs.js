const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedProjects: [Project]
  }
  type Project {
    _id: ID
    name: String
    projectDescription: String
  }
  type WorkBreakdownStructure {
    _id: ID
    name: String
  }
  type ProjectNetwork {
    _id: ID
    name: String
  }
  type Ghantt {
    _id: ID
    name: String
  }

  type Auth {
    token: ID!
    user: User
  }
  input SavedProjectInput {
    _id: ID
    name: String
    projectDescription: String
    ProjectId: String
  }

  type Query {
    users: [User]
    user(id: ID!): User
    me: User
    projects: [Project]
    project(id: ID!): Project
  }

  type Mutation {
    addUser(email: String!, username: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addProject(name: String!, projectDescription: String!): Project
    removeProject(id: ID!): User
    addGhantt(name: String): Ghantt
    addProjectNetwork(name: String): ProjectNetwork
    addWorkBreakdownStructure(name: String): WorkBreakdownStructure
  }
`;

module.exports = typeDefs;
