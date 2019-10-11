const httpCfg: any = {
	production: {
    backendURL: process.env.API_URL || 'http://localhost:8080',
  },
  development: {
    backendURL: process.env.API_URL || 'http://localhost:8080',
  },
}

export default httpCfg[process.env.NODE_ENV];