const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (_, args) => {
      return User.findOne({ _id: args.id });
    },
    me: async (_, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      // projects: async () => {
      //   return Project.find();
      // },
      // project: async (_, args) => {
      //   return Project.findOne({ _id: args.id });
      // };
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (_, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
   // addProject: async (_, args) => {
    //  const project = await Project.create(args);
    //  const token = signToken(project);
    //  return { token, project };
   // },
    login: async (_, { email, password }) => { // can change to username but change everywhere login method used
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
