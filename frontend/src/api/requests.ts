import axios from 'axios';

import httpCfg from '../config/http';
import { ResponseType, ResponseResultType, RequestArgs } from './types';

export async function getCharacters ({ nameStartsWith, offset, limit }: RequestArgs): Promise<ResponseResultType> {
  return axios.request<any>({
    method: 'get',
    url: httpCfg.backendURL + `&nameStartsWith=${nameStartsWith}&offset=${offset}&limit=${limit}`,
    validateStatus: function (status) {
      return status === 200 || status === 401 || status === 409
    }
  }).then(getCharactersResponse => {
    console.log('RES', getCharactersResponse);
    return {
      status: getCharactersResponse.status,
      data: getCharactersResponse.data
    };
  }).catch(err => {
    return {
      status: 500,
      data: { message: 'Internal server error' }
    };
  });
}