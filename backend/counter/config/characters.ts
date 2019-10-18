const charactersCfg = {
  production: {
    model_provider: process.env.USER_MODEL_PROVIDER || 'CHARACTERS_MODEL',
    model_document_limit: 1000,
  },
  development: {
    model_provider: process.env.USER_MODEL_PROVIDER || 'CHARACTERS_MODEL',
    model_document_limit: 1000,
  },
};

export default charactersCfg[process.env.NODE_ENV];
