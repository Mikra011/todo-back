const sqliteConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  migrations: {
    directory: './data/migrations',
  },
  seeds: {
    directory: './data/seeds',
  },
  pool: {
    afterCreate: (conn, done) => {
      conn.run('PRAGMA foreign_keys = ON', done);
    },
  },
}

module.exports = {
  development: {
    ...sqliteConfig,
    connection: { filename: './data/arcade_clone.db3' },
  },
  testing: {
    ...sqliteConfig,
    connection: { filename: './data/arcade_clone.test.db3' },
  },
  production: {
    client: 'pg',
    connection: {
      host: process.env.HOST, 
      user: process.env.USER, 
      password: process.env.PASSWORD, 
      database: process.env.DATABASE, 
      ssl: {
        rejectUnauthorized: false,
      },
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
}
