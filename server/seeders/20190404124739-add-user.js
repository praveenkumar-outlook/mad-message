"use strict";
const uuidv4 = require("uuid/v4");

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert("User", [{
      id: uuidv4(),
      first_name: "Tony",
      last_name: "Stark",
      image: "/images/tony-stark.png"
    }, {
      id: uuidv4(),
      first_name: "Steve",
      last_name: "Rogers",
      image: "/images/steve-rogers.jpg"
    }], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete("User", null, {});
  }
};
