const userCfg = {
  production: {
    model_provider: process.env.USER_MODEL_PROVIDER || 'USER_MODEL',
  },
  development: {
    model_provider: process.env.USER_MODEL_PROVIDER || 'USER_MODEL',
  },
};

export default userCfg[process.env.NODE_ENV];
