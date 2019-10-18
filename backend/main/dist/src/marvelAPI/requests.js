"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const common_1 = require("@nestjs/common");
const marvelAPI_1 = require("../../config/marvelAPI");
async function getCharacters(offset) {
    try {
        const charactersResponse = await axios_1.default.request({
            method: 'get',
            url: marvelAPI_1.marvelBackendURL + `&limit=${marvelAPI_1.getCharactersLimit}&offset=${offset}`,
            validateStatus: (status) => {
                return status === 200 || status === 401 || status === 409 || status === 429;
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
        console.log(`[MARVEL API] [400 status] Data: ${JSON.stringify(charactersResponse.data)}`);
        throw new common_1.InternalServerErrorException();
    }
    catch (err) {
        console.log(`[MARVEL API] ${err}`);
        throw new common_1.InternalServerErrorException();
    }
}
exports.getCharacters = getCharacters;
//# sourceMappingURL=requests.js.map