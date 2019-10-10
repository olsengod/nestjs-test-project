"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requests_1 = require("../marvelAPI/requests");
async function fillDB() {
    const characterList = [];
    let offset = 0;
    let tempList = [];
    while ((tempList = await requests_1.getCharacters(offset)).length) {
        console.log('characterList', characterList.length, tempList[0]);
        characterList.push(...tempList);
        offset += 100;
    }
    console.log('characterListFinal', characterList.length);
}
exports.default = fillDB;
//# sourceMappingURL=fillDB.js.map