import axios from 'axios';

import marvelBackendURL from '../../config/marvelAPI';
import { ResponseType, ResponseResultType, Result } from './types';

export async function getCharacters(offset: number): Promise<ResponseResultType> {
  try {
    const charactersResponse = await axios.request<ResponseType>({
      method: 'get',
      url: marvelBackendURL + `&limit=100&offset=${offset}`,
      validateStatus: (status) => {
        return status === 200 || status === 401 || status === 409;
      },
    });

    if (charactersResponse.status === 200) {
      const result = charactersResponse.data.data.results.map((character: Result) => ({
        name: character.name,
        description: character.description,
        resourceURI: character.resourceURI,
      }));
      return result;
    }

    console.log(`[MARVEL API] [400 status] Data: ${charactersResponse.data}`);
  } catch (err) {
    console.log(`[MARVEL API] ${err}`);
  }
}
