const { User } = require('../models');
// Update the Query and Mutation resolvers to work with the new User model. For example, the me query resolver might look like this:
const resolvers = {
  Query: {
  me: async (parent, args, context) => {
    if (context.user) {
      const userData = await User.findOne({ _id: context.user._id })
        .select('-__v -password')
        .populate('posts')
        .populate('friends');

      return userData;
    }

    throw new AuthenticationError('Not logged in');
  },
},
// Update the Mutation resolvers to work with the new User model. For example, the addUser mutation resolver might look like this:
Mutation: {
  addUser: async (parent, args) => {
    const user = await User.create(args);
    const token = signToken(user);
    return { token, user };
    // return { user };
  },

  // update mutation to add new post
  
  addpost: async (parent, args) => {
    const user = await User.create(args);
    const token = signToken(posts);
    return { token, posts }
    // return { posts };
  
}

// define other route methods/functions here 

}};

module.exports = resolvers;
