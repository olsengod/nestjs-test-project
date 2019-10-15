import * as mongoose from 'mongoose';
import { IsString, IsInt, Min, Max } from 'class-validator';
import { Transform } from 'class-transformer';

export interface Character extends mongoose.Document {
  id: string;
  name: string;
  description: string;
  resourceURI: string;
}

export class GetCharactersDto {
  @IsString({
    message: 'Parameter nameStartsWith should be a string',
  })
  readonly nameStartsWith: string;

  @Transform(offset => parseInt(offset, 10))
  @IsInt({
    message: 'Parameter offset should be an integer',
  })
  readonly offset: number;

  @Transform(limit => parseInt(limit, 10))
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
