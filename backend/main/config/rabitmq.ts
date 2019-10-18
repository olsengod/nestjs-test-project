const rabbitmqCfg = {
  production: {
    host: process.env.RABBIT_HOST || 'localhost',
    port: process.env.RABBIT_PORT || 5672,
  },
  development: {
    host: process.env.RABBIT_HOST || 'localhost',
    port: process.env.RABBIT_PORT || 5672,
  },
};

export default rabbitmqCfg[process.env.NODE_ENV];
