import axios from 'axios';

import httpCfg from '../config/http';
import { ResponseType, ResponseResultType, RequestArgs } from './types';

export async function getCharacters ({ nameStartsWith, offset, limit }: RequestArgs): Promise<ResponseResultType> {
  return axios.request<ResponseType>({
    method: 'get',
    url: httpCfg.backendURL + `/characters?nameStartsWith=${nameStartsWith}&offset=${offset}&limit=${limit}`,
    validateStatus: function (status) {
      return status === 200 || status === 400 || status === 401 || status === 403 || status === 409
    }
  }).then(getCharactersResponse => {
    return {
      status: getCharactersResponse.status,
      clientErrorStatuses: [400, 401, 403, 409],
      data: getCharactersResponse.data
    };
  }).catch(() => {
    return {
      status: 500,
      clientErrorStatuses: [400, 401, 403, 409],
      data: ['Internal server error'],
    };
  });
}