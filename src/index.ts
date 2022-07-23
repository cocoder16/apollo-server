import { ApolloServer } from "apollo-server";

import typeDefs from "./schema";

const server = new ApolloServer({ typeDefs });

if (process.env.NODE_ENV !== "test") {
  server
    .listen({
      port: 4000,
    })
    .then(() => {
      console.log(`Server is running at http://localhost:4000`);
    });
}
