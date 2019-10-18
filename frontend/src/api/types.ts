import { CharState } from '../store/character/types'
import { GraphQLError } from 'graphql';

// API spec response
interface GetCharactersResponse {
  data: Data | undefined
  errors: GraphQLError[] | undefined
}

export interface Data {
  getPaginatedList: GetPaginatedList
}

export interface GetPaginatedList {
  offset: number
  limit: number
  total: number
  results: Result[]
}

export interface Result {
  id: number
  name: string
  description: string
  resourceURI: string
}

interface Error {
  message: Message
}

interface Message {
  statusCode: number
  error: string
  message: string[]
}

//Request arguments
interface GetCharactersArgs {
  nameStartsWith: CharState['searchName']
  offset: CharState['offset']
  limit: CharState['limit']
}

//Response objects
interface ResponseResult {
  status: number
  clientErrorStatuses: number[]
  data: Data['getPaginatedList'] | GetCharactersResponse['errors'] | string[]
}

export type ResponseType = Partial<GetCharactersResponse>;
export type RequestArgs = GetCharactersArgs;
export type ResponseResultType = ResponseResult;