'use strict';

module.exports = {
  development: {
    db: 'postgres://'+process.env.PSQL_USERNAME+':'+process.env.PSQL_PASSWORD+'@localhost:5432/'+process.env.PSQL_DB,
    port: 3333
  },
  test: {
    db: 'postgres://'+process.env.PSQL_USERNAME+':'+process.env.PSQL_PASSWORD+'@localhost:5432/'+process.env.PSQL_DB,
    port: 5555
  },
  // production: {

  // }
};