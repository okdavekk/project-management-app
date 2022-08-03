const { gql } = require('apollo-server-express');

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
  projectLeader: String
  
  }

  type Auth {
    token: ID!
    user: User
  }
  input SavedProjectInput{
    _id: ID
  name: String
  projectLeader: String
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
    addUser(email:String!, username:String!, password:String!): Auth
    login(email:String!, password:String!): Auth
    addProject(name:String!, projectLeader:String!): Project
    updateProject(_id: ID!, name: String, projectLeader:String!): Project
    removeProject(ProjectId: String!): User
  }
`;

module.exports = typeDefs;
