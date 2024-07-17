const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://alb-queima-microservices-dev-395450951.us-east-1.elb.amazonaws.com:3048",
    setupNodeEvents(on, config) {
    },
  },
});