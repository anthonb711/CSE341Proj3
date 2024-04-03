const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Skill Swap',
    description: 'A community skill exchange app',
    version: '1.0.0'
  },
  //host: 'cse341proj3.onrender.com',
  host: 'cse341proj3-1.onrender.com',
  //host: 'localhost:8080',
  schemes: ['https']
};

const outputFile = './swagger-output.json';
const routes = ['./routes/index.js'];

swaggerAutogen(outputFile, routes, doc);
