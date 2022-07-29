export default {
  Query: {
    me: () => {
      // TODO: type 정의??
      return {
        id: 1,
        userId: "ab",
        name: "abc",
        level: 4,
      };
    },
  },
  Mutation: {
    signUp: () => {
      // TODO: arguments validate
      return {
        success: true,
        message: "sign up successed",
      };
    },
  },
};
