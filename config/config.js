'use strict';

module.exports = {
  development: {
    // "username": process.env.PSQL_USERNAME,
    // "password": process.env.PSQL_PASSWORD,
    // "database": "database_development",
    db: 'postgres://'+process.env.PSQL_USERNAME+':'+process.env.PSQL_PASSWORD+'@localhost:5432/'+process.env.PSQL_DB,
    "host": "127.0.0.1",
    "dialect": "postgres",
    "options": { logging: console.log }
  },
  "test": {
    // "username": process.env.PSQL_USERNAME,
    // "password": process.env.PSQL_PASSWORD,
    // "database": "database_test",
    db: 'postgres://'+process.env.PSQL_USERNAME+':'+process.env.PSQL_PASSWORD+'@localhost:5432/'+process.env.PSQL_DB,
    "host": "127.0.0.1",
    "dialect": "postgres",
    "options": { logging: false }
  },
  "production": {
    "username": process.env.PSQL_USERNAME,
    "password": process.env.PSQL_PASSWORD,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
};