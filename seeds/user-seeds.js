const { User } = require("../models");

const userData = [
  {
    username: "james_will",
    twitter: "jameswil",
    github: "jameswil",
    email: "james_wil@gmail.com",
    password: "p@ssword1",
  },
  {
    username: "shawn_cs",
    twitter: "shawncs",
    github: "shawncs",
    email: "shawn_cs@gmail.com",
    password: "p@ssword3",
  },
  {
    username: "max_bob",
    twitter: "maxbo",
    github: "maxbo",
    email: "max_bo@gmail.com",
    password: "p@ssword2",
  },
  {
    username: "poohpear",
    twitter: "pooh$pear",
    github: "poohpear",
    email: "pooh_pear@gmail.com",
    password: "p@ssword6",
  },
  {
    username: "elloiton_n",
    twitter: "elloiton",
    github: "elloiton",
    email: "elloit_on@gmail.com",
    password: "p@ssword4",
  },
  {
    username: "mcxnocode",
    twitter: "mcxnocode",
    github: "mcxnocode",
    email: "mcxno_code@gmail.com",
    password: "p@ssword5",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
