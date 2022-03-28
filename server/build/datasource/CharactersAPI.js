"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_datasource_rest_1 = require("apollo-datasource-rest");
class CharactersAPI extends apollo_datasource_rest_1.RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://swapi.dev/api';
    }
    // fetch all characters
    getAllPeople() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.get('people');
        });
    }
    // filter people on a specific page
    getByPage(page) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`people`, {
                page,
            });
        });
    }
    // get person details
    getByName(search) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.get(`people`, {
                search
            });
        });
    }
}
exports.default = CharactersAPI;
//# sourceMappingURL=CharactersAPI.js.map