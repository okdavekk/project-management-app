const { AuthenticationError } = require('apollo-server-express');
// <<<<<<< HEAD
const { User, WBS, Ghantt, PN } = require('../models');
// =======
const { Project, User } = require('../models');
// >>>>>>> ef93375baf98b4a022b89518c16776fb18b632e3
const { signToken } = require('../utils/auth');

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
      throw new AuthenticationError('You need to be logged in!');
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
    addPn: async (_, args) => {
      const pn = await PN.create(args);
      const token = signToken(pn);
      return { token, pn };
    },
    addWbs: async (_, args) => {
      const wbs = await WBS.create(args);
      const token = signToken(wbs);
      return { token, wbs };
    },
    addGhantt: async (_, args) => {
      const ghantt = await Ghantt.create(args);
      const token = signToken(ghantt);
      return { token, ghantt };
    },
    addProject: async (_, args) => {
      const project = await Project.create(args);
      const token = signToken(project);
      return { token, project };
    },
    updateProject: async (_, { id, name, projectLeader }, context) => {
      if (context.user) {
        return await Project.findByIdAndUpdate(id, { name, projectLeader }, { new: true });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeProject: async (_, { id }, context) => {
      if (context.user) {
        await User.findOneAndUpdate(
          { savedProjects: projectId },
          { $pull: { savedProjects: id } },
          { new: true }
        );
        const project = await Project.findByIdAndDelete(id);

        return project;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeProjectFromMe: async (_, { id }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedProjects: id } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addProjectToMe: async (_, { id }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { savedProjects: id } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      console.log(user);
      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;