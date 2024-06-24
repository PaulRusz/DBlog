// Update the User to match the new User model structure. :
const typeDefs =`

type User {
  _id: ID
  username: String
  email: String
  password: String
  avatar: String
  userimage: String
  posts: [Post]
  friends: [User]
  friendCount: Int
}


// Update the Mutation type to include the new mutations for the User model. 
type Mutation {
  addUser(username: String!, email: String!, password: String!): Auth
saveUser(username: String!, password: [String]!, email: String!, avatar: String!, userimagemage: String!, posts: String!): User
removeUser(username: String!): User
}
;

// Update the Auth type to include the user field:
type Auth {
  token: ID!
  user: User
}`



module.exports = typeDefs;