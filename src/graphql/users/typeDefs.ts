import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    me: User
  }

  type Mutation {
    signUp(userId: String, password: String, passwordConfirm: String): Response
  }

  interface Response {
    success: Boolean!
    message: String!
  }

  type User {
    id: ID!
    userID: String!
    name: String!
    level: Int!
  }
`;

export default typeDefs;
