require('dotenv').config();
const Users = require('./models/users');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

const corsOptions = {
  origin: '*',
  methods: [],
  allowedHeaders: [],
  exposedHeaders: [],
  credentials: true
};

app.get('/api/', cors(corsOptions) ,async (req, res) => {
  console.log("Response Successful");
  res.status(200).json({"code": 200})
});

app.get('/api/users/', cors(corsOptions) ,async (req, res) => {
  const users = await Users.query();
  console.log(users);
  console.log(Users.tableName);
  res.status(200).json(users)
});

app.get('api/users/:id', cors(corsOptions), async(req, res) =>{
    console.log(`required: ${req.params.id}`);
    const user = await Users.query().findById(req.params.id)
    console.log(user);
    res.status(200).json(user);
})

app.listen(port, () => {
  console.log(`App listening at ${process.env.URL}:${port}/`);
  console.log('Database connection:')
  console.log(`${process.env.DB_HOST}:${process.env.DB_PORT}`);
})