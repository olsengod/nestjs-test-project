import { IsString, IsInt, Min, Max } from 'class-validator';
import { Field, Int, ArgsType } from 'type-graphql';

@ArgsType()
export class GetPaginatedListArgs {
  @Field()
  @IsString({
    message: 'Parameter $property should be a string',
  })
  readonly nameStartsWith: string;

  @Field(() => Int)
  @IsInt({
    message: 'Parameter $property should be an integer',
  })
  readonly offset: number;

  @Field(() => Int)
  @IsInt({
    message: 'Parameter $property should be an integer',
  })
  @Min(1, {
    message: 'Minimal $property is $constraint1 character, but actual is $value',
  })
  @Max(100, {
    message: 'Maximum $property is $constraint1 characters, but actual is $value',
  })
  readonly limit: number;
}
