import * as express from 'express';
import * as cors from 'cors';

import Houses from './models/houses';

const app = express()
const port = 8080;

const corsOptions: cors.CorsOptions = {
  origin: '*',
  methods: [],
  allowedHeaders: [],
  exposedHeaders: [],
  credentials: true
};
app.use(cors(corsOptions))

app.get('/api/ckeckhouses',async (req, res) => {
  console.log("Response Successful");
  res.status(200).json({"code": 200, "host": process.env.DB_HOST})
});

app.get('/api/houses/',async (req, res) => {
  const houses = await Houses.query();
  console.log(houses);
  console.log(Houses.tableName);
  res.status(200).json(houses)
});

app.get('/api/houses/:id', async(req, res) =>{
    console.log(`required: ${req.params.id}`);
    const house = await Houses.query().findById(req.params.id)
    console.log(house);
    res.status(200).json(house);
});

app.listen(port, () => {
  console.log(`App listening at ${process.env.URL}:${port}/`);
  console.log('Database connection:')
  console.log(`${process.env.DB_HOST}:${process.env.DB_PORT}`);
})