const serverCfg = {
  production: {
    port: process.env.PORT || 8080,
  },
  development: {
    port: process.env.PORT || 8080,
  },
};

export default serverCfg[process.env.NODE_ENV];
