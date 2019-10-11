import { Model } from 'mongoose';
import { InternalServerErrorException } from '@nestjs/common';

import { getCharacters } from '../marvelAPI/requests';
import { getCharactersLimit } from '../../config/marvelAPI';
import charactersCfg from '../../config/characters';

export default async function initDB(dbModel: Model<any>): Promise<void> {
  try {
    const offsetList: number[] = [];
    for (let i = 0; i < charactersCfg.model_document_limit; i += getCharactersLimit) {
      offsetList.push(i);
    }

    let tempList: object[] = [];
    await dbModel.deleteMany({});

    const dbInsertions = offsetList.map(async (offset) => {
      if ((tempList = await getCharacters(offset)) && tempList.length) {
        await dbModel.insertMany(tempList);
      }
    });

    await Promise.all(dbInsertions);

    // dbModel.find((err: string, res: any) => {
    //   if (!err) {
    //     console.log('[MONGODB] Database contain now:\n', JSON.stringify(res, null, 4));
    //   } else {
    //     console.log(`[MONGODB] ${err}`);
    //   }
    // });

    dbModel.count((err: string, count: number) => {
      if (!err) {
        console.log(`[MONGODB] Database was successfuly initialised and contain ${count} documents`);
      } else {
        console.log(`[MONGODB] ${err}`);
        throw new InternalServerErrorException();
      }
    });
  } catch (err) {
    console.log(`[MONGODB] ${err}`);
    throw new InternalServerErrorException();
  }
}
