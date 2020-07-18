const DevHO = {
  name: "Yoon SangHO",
  age: 31,
  gender: "male",
};

const resolvers = {
  Query: {
    person: () => DevHO,
  },
};

export default resolvers;
