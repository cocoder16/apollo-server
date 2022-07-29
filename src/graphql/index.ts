import { makeExecutableSchema } from "@graphql-tools/schema";
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";

const loadedTypes = loadFilesSync(`${__dirname}/**/typeDefs.ts`);
const loadedResolvers = loadFilesSync(`${__dirname}/**/resolver.ts`);

const typeDefs = mergeTypeDefs(loadedTypes);
const resolvers = mergeResolvers(loadedResolvers);

export const schema = makeExecutableSchema({ typeDefs, resolvers });
