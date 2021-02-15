const faker = require("faker");

const buildUser = function (type) {
  switch (type) {
    case "new":
      const userdata = {
        username: faker.name.findName(), // Leticia Hauck
        email: faker.internet.email(), // Ewell.Cremin20@hotmail.com
        password: faker.internet.password(), //qxEBWLY7QJPeqcI
      };
      return userdata;
  }
};

module.exports = { buildUser };
