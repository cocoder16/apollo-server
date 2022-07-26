import { ApolloServer } from "apollo-server";

import { schema } from "src/graphql";
import { createDB, checkDBConnection } from "src/db/db";

const server = new ApolloServer({ schema });
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
