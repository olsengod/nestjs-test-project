"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requests_1 = require("../marvelAPI/requests");
const marvelAPI_1 = require("../../config/marvelAPI");
async function initDB(dbModel) {
    const characterList = [];
    let offset = 0;
    let tempList = [];
    while ((tempList = await requests_1.getCharacters(offset)) && tempList.length) {
        console.log('characterList', characterList.length, tempList[0]);
        characterList.push(...tempList);
        await dbModel.deleteMany({});
        await dbModel.insert;
        offset += marvelAPI_1.getCharactersLimit;
    }
    console.log('characterListFinal', characterList.length);
}
exports.default = initDB;
//# sourceMappingURL=fillDB.js.map