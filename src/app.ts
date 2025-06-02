import { Application, NextFunction, Request, Response } from 'express';
import express from 'express';
import cors from 'cors';
import routes from './routes';
import { errorCatchAllHandler } from './middleware/errorCatchAllHandler';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swagger';
import { startPollingUpdates } from './services/updatePolling';

const app: Application = express();
app.use(express.json());

startPollingUpdates();

// Enable CORS for frontend running on http://localhost:3000
app.use(cors({
  origin: 'http://localhost:3000', // your React dev server
  methods: ['GET', 'POST'],
  credentials: true,
}));

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  res.header('Server', '');
  res.header('server', '');
  next();
});


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api/v1', routes);
app.use(errorCatchAllHandler);

export default app;