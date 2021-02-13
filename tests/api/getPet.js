const axios = require("axios");

const Pet = async (id) => {
  const response = await axios.get(`https://petstore.swagger.io/v2/pet/${id}`);
  return response;
};

module.exports = Pet;
