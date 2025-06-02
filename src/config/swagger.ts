import swaggerJSDoc from 'swagger-jsdoc';

export const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Weather API',
      version: '1.0.0',
      description: 'Simple weather forecast service',
    },
  },
  apis: [
    './src/routes.ts',
    './src/controllers/**/*.ts',
  ],
});
