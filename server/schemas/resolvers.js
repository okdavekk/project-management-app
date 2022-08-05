const { AuthenticationError } = require("apollo-server-express");

const { 
  User, 
  WorkBreakdownStructure, 
  Ghantt, 
  ProjectNetwork, 
  Project  
} = require("../models");

const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (_, args) => {
      return User.findById(args.id);
    },
    me: async (_, __, context) => {
      if (context.user) {
        return User.findById(context.user._id);
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    projects: async () => {
      return Project.find();
    },
    project: async (_, args) => {
      return Project.findById(args.id);
    },
  },

  Mutation: {
    addUser: async (_, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    addProjectNetwork: async (_, args) => {
      const ProjectNetwork = await ProjectNetwork.create(args);
      const token = signToken(pn);
      return { token, ProjectNetwork };
    },
    addWorkBreakdownStructure: async (_, args) => {
      const workBreakdownStructure = await WorkBreakdownStructure.create(args);
      return workBreakdownStructure;
    },
    addGhantt: async (_, args) => {
      const ghantt = await Ghantt.create(args);
      return ghantt;
    },
    addProject: async (_, args) => {
      const project = await Project.create(args);
      return project;
    },
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      console.log(user);
      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    removeProject: async (_, { id }, context) => {
      if (context.user) {
        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedProjects: id } },
          { new: true }
        );
        await Project.findByIdAndDelete(id);
  
        return user;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
