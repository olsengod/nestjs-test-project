import { client } from './connection';
import { gql } from 'apollo-boost';

import { ResponseType, ResponseResultType, RequestArgs } from './types';

export async function getCharacters ({ nameStartsWith, offset, limit }: RequestArgs) {
  try {
    const clientErrorStatuses = [400, 401, 403, 409];

    const res: any = await client.query({
      query: gql`
        {
          getPaginatedList(nameStartsWith: "${nameStartsWith}", offset: ${offset}, limit: ${limit}){
            offset
            total
            limit
            results {
              id
              name
              description
            }
          }
        }
      `
    });
    console.log('res', res);
    if (res.data) {
      return {
        status: 200,
        clientErrorStatuses,
        data: res.data.getPaginatedList,
      };
    } else {

      return {
        status: res.errors[0].message.statusCode,
        clientErrorStatuses,
        data: res.errors[0].message.message,
      };
    }
    
  } catch (err) {
    console.log('[REQUEST getCharacters]', err);
  }  
}