const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'MMH API',
    version: '1.0.0',
    description: 'This is Apis for MMH',
  },
  host: '3.35.233.239',
  basePath: '/',
  securityDefinitions: {
    bearerAuth: {
      type: 'apiKey',
      name: 'Authorization',
      scheme: 'bearer',
      in: 'header',
      bearerFormat: 'JWT',
    },
  },
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./app.js', './routes/*.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
