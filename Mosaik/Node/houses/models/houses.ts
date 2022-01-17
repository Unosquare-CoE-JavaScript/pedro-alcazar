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

interface House {
    id: number;
    image: string;
    type : string;
    Mode: string;
    Description: string;
    Address: string;
    Betrooms: number;
    Bathrooms: number;
    Square: number;
    price: number;
    seller: number;
}

interface Houses extends House {

}
class Houses extends Model{
    static get tableName (): string {
        return 'Houses';
    };
}

export default Houses;