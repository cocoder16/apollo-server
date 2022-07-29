import { gql } from "apollo-server";

export default gql`
  type Query {
    me: User!
  }

  type Mutation {
    signUp(
      userId: String!
      password: String!
      passwordConfirm: String!
      name: String!
    ): SignUpResponse!
  }

  type User {
    id: ID!
    userId: String!
    name: String!
    level: Int!
  }

  interface MutationResponse {
    success: Boolean!
    message: String!
  }

  type SignUpResponse implements MutationResponse {
    success: Boolean!
    message: String!
  }
`;
