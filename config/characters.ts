const charactersCfg = {
  production: {
    model_provider: process.env.USER_MODEL_PROVIDER || 'CHARACTERS_MODEL',
  },
  development: {
    model_provider: process.env.USER_MODEL_PROVIDER || 'CHARACTERS_MODEL',
  },
};

export default charactersCfg[process.env.NODE_ENV];
