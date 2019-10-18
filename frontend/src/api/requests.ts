import { client } from './connection';
import { gql, ApolloQueryResult } from 'apollo-boost';

import { ResponseType, ResponseResultType, RequestArgs, Data } from './types';

export async function getCharacters ({ nameStartsWith, offset, limit }: RequestArgs): Promise<ResponseResultType> {
  const clientErrorStatuses = [400, 401, 403, 409];

  try {
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
    return {
      status: 500,
      clientErrorStatuses,
      data: ['Internal server error'],
    };
  }  
}