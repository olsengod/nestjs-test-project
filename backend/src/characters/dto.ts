import { IsString, IsInt, Min, Max } from 'class-validator';
import { Field, Int, ArgsType } from 'type-graphql';

@ArgsType()
export class GetPaginatedListArgs {
  @Field()
  @IsString({
    message: 'Parameter nameStartsWith should be a string',
  })
  readonly nameStartsWith: string;

  @Field(() => Int)
  @IsInt({
    message: 'Parameter offset should be an integer',
  })
  readonly offset: number;

  @Field(() => Int)
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
