const serverCfg = {
  production: {
    port: process.env.PORT || 3000,
  },
  development: {
    port: process.env.PORT || 3000,
  },
};

export default serverCfg[process.env.NODE_ENV];
