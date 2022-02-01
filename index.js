import express from 'express';
import router from './router.js';
import cors from 'cors';
const app = express()
const port = process.env.port || 3000;
app.use(cors());
app.use(express.json({limit: '100mb'}));
app.use(express.urlencoded({ extended: true,limit: '10mb' }));
app.use(router);
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  });