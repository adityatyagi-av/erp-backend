import pg from 'pg'
import dotenv from "dotenv"

dotenv.config();
const { Pool } = pg

const pool = new Pool({
    host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  port:process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DATABASE,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 1000,
})

export const query =async (text, params) =>{
    const response =await pool.query(text, params)
    return response;
} 


export async function createClient(){
    const client = await pool.connect()
    return client;
}

export async function releaseClient(client){
    client.release();
}