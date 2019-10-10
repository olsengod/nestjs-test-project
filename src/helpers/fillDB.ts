import axios from 'axios';

import { getCharacters } from '../marvelAPI/requests';

export default async function fillDB(): Promise<any> {
  const characterList: object[] = [];
  let offset: number = 0;
  let tempList: object[] = [];
  while ((tempList = await getCharacters(offset)).length) {
    console.log('characterList', characterList.length, tempList[0]);
    characterList.push(...tempList);
    offset += 100;
  }

  console.log('characterListFinal', characterList.length);
}
