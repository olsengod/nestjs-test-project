// import * as mongoose from 'mongoose';
// import { IsString, IsUUID, IsInt, Min, Max } from 'class-validator';

// export interface User extends mongoose.Document {
//   id: string;
//   name: string;
//   age: number;
// }

// export class GetCharacterscDto {
//   @IsString({
//     message: 'User name should be a string',
//   })
//   readonly name: string;

//   @IsInt()
//   @Min(18, {
//     message: 'User is too young. Minimal age is $constraint1 characters, but actual is $value',
//   })
//   @Max(100, {
//     message: 'User is too old. Maximum age is $constraint2 characters, but actual is $value',
//   })
//   readonly age: number;
// }
