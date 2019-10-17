import { Document } from 'mongoose';
import { Field, Int, ObjectType } from 'type-graphql';

export interface CharacterDB extends Document {
  id: string;
  name: string;
  description: string;
  resourceURI: string;
}

@ObjectType()
export class CharacterGQL {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  resourceURI?: string;
}

@ObjectType()
export class PaginatedListGQL {
  @Field(() => Int)
  total: number;

  @Field(() => Int)
  offset: number;

  @Field(() => Int)
  limit: number;

  @Field(() => [CharacterGQL])
  results: [CharacterGQL];
}
