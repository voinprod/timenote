// Update with your config settings.

require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: '',
      password: '',
      database: 'template1',
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }

};

