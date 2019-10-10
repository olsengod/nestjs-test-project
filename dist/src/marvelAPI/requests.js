"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const marvelAPI_1 = require("../../config/marvelAPI");
async function getCharacters(offset) {
    try {
        const charactersResponse = await axios_1.default.request({
            method: 'get',
            url: marvelAPI_1.default + `&limit=100&offset=${offset}`,
            validateStatus: (status) => {
                return status === 200 || status === 401 || status === 409;
            },
        });
        if (charactersResponse.status === 200) {
            const result = charactersResponse.data.data.results.map((character) => ({
                name: character.name,
                description: character.description,
                resourceURI: character.resourceURI,
            }));
            return result;
        }
        console.log(`[MARVEL API] [400 status] Data: ${charactersResponse.data}`);
    }
    catch (err) {
        console.log(`[MARVEL API] ${err}`);
    }
}
exports.getCharacters = getCharacters;
//# sourceMappingURL=requests.js.map