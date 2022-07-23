import { ApolloServer } from "apollo-server";

import typeDefs from "./db/schema";
import { createDB, checkDBConnection } from "./db/db";

const server = new ApolloServer({ typeDefs });
const db = createDB();

if (process.env.NODE_ENV !== "test") {
  server
    .listen({
      port: 4000,
    })
    .then(() => {
      console.log(`Server is running at http://localhost:4000`);
      checkDBConnection(db);
    });
}
