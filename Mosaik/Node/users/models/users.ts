import * as dotenv from 'dotenv';
import knex from 'knex'
import { Model } from 'objection';

dotenv.config({ path: __dirname+'/../.env' });

// Initialize knex.
const knexVar = knex({
    client: 'pg',
    version: '7.2',
    connection: {
      host : process.env.DB_HOST,
      port : Number(process.env.DB_PORT),
      user : process.env.DB_USER,
      password : process.env.DB_PASS,
      database : 'postgres'
    },
    searchPath: ['mosaik_db']
});
Model.knex(knexVar);

interface User {
    id: number;
    firstName: string;
    lastName : string;
    username: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}

interface Users extends User {

}
class Users extends Model{
    static get tableName (): string {
        return 'Users';
    };
}

export default Users;