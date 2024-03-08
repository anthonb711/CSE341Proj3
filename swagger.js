const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'MEMBERS API',
    description: 'API to access member information related to themselves and their families',
    version: '1.0.1'
  },
  host: 'agbwebdev-proj2.onrender.com',
  //host: 'localhost:8080',
  schemes: ['https']
};

const outputFile = './swagger-output.json';
const routes = ['./routes/index.js'];

swaggerAutogen(outputFile, routes, doc);
