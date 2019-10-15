import * as mongoose from 'mongoose';
import { Field, Int, ObjectType, ArgsType } from 'type-graphql';
import { IsString, IsInt, Min, Max } from 'class-validator';

export interface CharacterDB extends mongoose.Document {
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

@ArgsType()
export class GetCharactersArgs {
  @Field()
  @IsString({
    message: 'Parameter nameStartsWith should be a string',
  })
  readonly nameStartsWith: string;

  @Field(type => Int)
  @IsInt({
    message: 'Parameter offset should be an integer',
  })
  readonly offset: number;

  @Field(type => Int)
  @IsInt({
    message: 'Parameter limit should be an integer',
  })
  @Min(1, {
    message: 'Minimal limit is $constraint1 characters, but actual is $value',
  })
  @Max(100, {
    message: 'Maximum limit is $constraint1 characters, but actual is $value',
  })
  readonly limit: number;
}
