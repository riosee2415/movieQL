export const people = [
  {
    id: "0",
    name: "Yoon SangHo",
    age: 31,
    gender: "male",
  },

  {
    id: "1",
    name: "Kim HanJu",
    age: 24,
    gender: "feMale",
  },

  {
    id: "2",
    name: "Noh JeaMin",
    age: 24,
    gender: "male",
  },

  {
    id: "3",
    name: "Hwang Ye Gyu",
    age: 28,
    gender: "feMale",
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === String(id));

  return filteredPeople[0];
};
