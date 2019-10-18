const serverCfg = {
  production: {
    port: process.env.PORT || 8081,
  },
  development: {
    port: process.env.PORT || 8081,
  },
};

export default serverCfg[process.env.NODE_ENV];
