const { defineConfig } = require("cypress");

const baseUrlProd = 'https://jats-fb-shopping.web.app/';
const baseUrlDev = 'http://localhost:3000';

module.exports = defineConfig({
  e2e: {

    baseUrl: process.env.NODE_ENV === 'production' ? baseUrlProd : baseUrlDev
  }

  // setupNodeEvents(on, config) {
  //   // implement node event listeners here
  // },
},
});
