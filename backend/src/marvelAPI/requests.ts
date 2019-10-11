import axios from 'axios';
import { InternalServerErrorException } from '@nestjs/common';

import { marvelBackendURL, getCharactersLimit } from '../../config/marvelAPI';
import { ResponseType, ResponseResultType, Result } from './types';

export async function getCharacters(offset: number): Promise<ResponseResultType | null> {
  try {
    const charactersResponse = await axios.request<ResponseType>({
      method: 'get',
      url: marvelBackendURL + `&limit=${getCharactersLimit}&offset=${offset}`,
      validateStatus: (status) => {
        return status === 200 || status === 401 || status === 409 || status === 429;
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

    console.log(`[MARVEL API] [400 status] Data: ${JSON.stringify(charactersResponse.data)}`);
    throw new InternalServerErrorException();
  } catch (err) {
    console.log(`[MARVEL API] ${err}`);
    throw new InternalServerErrorException();
  }
}
