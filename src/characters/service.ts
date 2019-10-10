// import { Injectable, Inject, NotFoundException } from '@nestjs/common';
// import { Model } from 'mongoose';

// // import { Character } from './types';
// import charactersCfg from '../../config/characters';

// @Injectable()
// export class CharactersService {
//   constructor(
//     @Inject(charactersCfg.model_provider)
//     // private readonly userModel: Model<Character>,
//   ) {}

//   async getCharacters() {
//     const characters = await this.userModel.find().exec();
//     return characters.map(user => ({
//       id: user.id,
//       name: user.name,
//       age: user.age,
//     }));
//   }
// }
