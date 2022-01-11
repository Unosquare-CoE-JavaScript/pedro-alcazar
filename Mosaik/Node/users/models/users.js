const { Model } = require('objection');
const Knex = require('knex');
require('dotenv').config();


// Initialize knex.
const knex = require('knex')({
    client: 'pg',
    version: '7.2',
    connection: {
      host : process.env.DB_HOST,
      port : process.env.DB_PORT,
      user : process.env.DB_USER,
      password : process.env.DB_PASS,
      database : process.env.DB_NAME
    },
    searchPath: ['Mosaik']
});
Model.knex(knex);
class Users extends Model{
    static get tableName(){
        return 'Users';
    }
}

module.exports = Users;