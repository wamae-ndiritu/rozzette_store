import express, { Application, Request, Response } from 'express';

const app: Application = express();
const port: number = 5000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World with TypeScript!');
});

// app.use("/api/v1", ROUTER);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});