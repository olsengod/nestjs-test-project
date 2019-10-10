"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const md5 = require("md5");
const apiURL = process.env.API_URL || 'https://gateway.marvel.com/v1/public/characters';
const ts = new Date().getTime();
const apiKey = process.env.API_PUBLIC_KEY || '90bf3c90e7c03d3fe1ff99bbad318ec4';
const privateKey = process.env.API_PRIVATE_KEY || 'fa5ecbcbca87c2366a0b65a8136bae2e9f890487';
const hash = md5(ts + privateKey + apiKey);
const marvelBackendURL = `${apiURL}?ts=${ts}&apikey=${apiKey}&hash=${hash}`;
exports.default = marvelBackendURL;
//# sourceMappingURL=marvelAPI.js.map