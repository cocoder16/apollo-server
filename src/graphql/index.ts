import { makeExecutableSchema } from "@graphql-tools/schema";
import { mergeTypeDefs } from "@graphql-tools/merge";

import usersTypeDefs from "./users/typeDefs";

const typeDefs = mergeTypeDefs([usersTypeDefs]);

export const schema = makeExecutableSchema({ typeDefs });
