import mysql from "mysql2";
import { config } from "dotenv";

config({
  path: "./data/config.env",
});

export const connection =  mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  database: process.env.MYSQL_DATABASE,
  password: process.env.MYSQL_PASSWORD,
  waitForConnections: true,
  // connectionLimit: 10,
  // queueLimit: 0
});
