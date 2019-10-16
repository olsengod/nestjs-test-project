const httpCfg: any = {
	production: {
    backendURL: process.env.API_URL || 'http://localhost:8080/graphql',
  },
  development: {
    backendURL: process.env.API_URL || 'http://localhost:8080/graphql',
  },
}

export default httpCfg[process.env.NODE_ENV];