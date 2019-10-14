"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const requests_1 = require("../marvelAPI/requests");
const marvelAPI_1 = require("../../config/marvelAPI");
const characters_1 = require("../../config/characters");
async function initDB(dbModel) {
    try {
        const offsetList = [];
        for (let i = 0; i < characters_1.default.model_document_limit; i += marvelAPI_1.getCharactersLimit) {
            offsetList.push(i);
        }
        let tempList = [];
        await dbModel.deleteMany({});
        const dbInsertions = offsetList.map(async (offset) => {
            if ((tempList = await requests_1.getCharacters(offset)) && tempList.length) {
                await dbModel.insertMany(tempList);
            }
        });
        await Promise.all(dbInsertions);
        dbModel.count((err, count) => {
            if (!err) {
                console.log(`[MONGODB] Database was successfully initialised and contain ${count} documents`);
            }
            else {
                console.log(`[MONGODB] ${err}`);
                throw new common_1.InternalServerErrorException();
            }
        });
    }
    catch (err) {
        console.log(`[MONGODB] ${err}`);
        throw new common_1.InternalServerErrorException();
    }
}
exports.default = initDB;
//# sourceMappingURL=initDB.js.map