const mongodbCfg = {
  production: {
    host: process.env.MONGO_HOST || 'localhost',
    port: process.env.MONGO_PORT || 27017,
    db_name: process.env.MONGO_DB_NAME || 'marvel_db',
    db_provider: process.env.MONGO_DB_PROVIDER || 'DATABASE_CONNECTION',
  },
  development: {
    host: process.env.MONGO_HOST || 'localhost',
    port: process.env.MONGO_PORT || 27017,
    db_name: process.env.MONGO_DB_NAME || 'marvel_db_dev',
    db_provider: process.env.MONGO_DB_PROVIDER || 'DATABASE_CONNECTION',
  },
};

export default mongodbCfg[process.env.NODE_ENV];
