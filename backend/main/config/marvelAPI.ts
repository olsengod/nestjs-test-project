import * as md5 from 'md5';

const apiURL: string = process.env.API_URL || 'https://gateway.marvel.com/v1/public/characters';
const ts = new Date().getTime();
const apiKey: string = process.env.API_PUBLIC_KEY || '90bf3c90e7c03d3fe1ff99bbad318ec4';
const privateKey: string = process.env.API_PRIVATE_KEY || 'fa5ecbcbca87c2366a0b65a8136bae2e9f890487';
const hash: any = md5(ts + privateKey + apiKey);

export const marvelBackendURL: string = `${apiURL}?ts=${ts}&apikey=${apiKey}&hash=${hash}`;

export const getCharactersLimit: number = 100;
