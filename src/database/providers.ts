import * as mongoose from 'mongoose';
import mongodbCfg from '../../config/database';

async function setDBConnection(): Promise<typeof mongoose | void> {
  try {
    const connection = await mongoose.connect(`mongodb://${mongodbCfg.host}:${mongodbCfg.port}/${mongodbCfg.db_name}`, {
      useNewUrlParser: true,
      reconnectTries: Number.MAX_VALUE,
      reconnectInterval: 500,
      poolSize: 10,
      bufferMaxEntries: 0,
      connectTimeoutMS: 10000,
      socketTimeoutMS: 45000,
    });
    console.log(`[MONGODB] Connection with '${mongodbCfg.db_name}' database was established`);
    return connection;
  } catch (err) {
    console.log(`[MONGODB] ${err}`);
  }
}

export const databaseProviders = [
  {
    provide: mongodbCfg.db_provider,
    useFactory: setDBConnection,
  },
];
