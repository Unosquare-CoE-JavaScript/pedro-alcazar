import * as express from 'express';
// import * as cors from 'cors';

import Users from './models/users';

const app = express()
const port = 8080;

// const corsOptions: cors.CorsOptions = {
//   origin: '*',
//   methods: [],
//   allowedHeaders: [],
//   exposedHeaders: [],
//   credentials: true
// };
// app.use(cors(corsOptions))

app.get('/api/',async (req, res) => {
  console.log("Response Successful");
  res.status(200).json({"code": 200, "host": process.env.DB_HOST})
});

app.get('/api/users/',async (req, res) => {
  const users = await Users.query();
  console.log(users);
  console.log(Users.tableName);
  res.status(200).json(users)
});

app.get('/api/users/:id', async(req, res) =>{
    console.log(`required: ${req.params.id}`);
    const user = await Users.query().findById(req.params.id)
    console.log(user);
    res.status(200).json(user);
});

app.listen(port, () => {
  console.log(`App listening at ${process.env.URL}:${port}/`);
  console.log('Database connection:')
  console.log(`${process.env.DB_HOST}:${process.env.DB_PORT}`);
})