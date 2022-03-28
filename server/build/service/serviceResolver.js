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
exports.ServiceResolvers = void 0;
exports.ServiceResolvers = {
    Query: {
        // fetching details of all characters
        characters: (_, __, { dataSources }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield dataSources.characterAPI.getAllPeople().then(resp => resp.results.map((item) => item));
        }),
        // getting all persons details
        person: (_, args, { dataSources }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield dataSources.characterAPI.getByName(args.name).then(resp => resp.results.map((item) => item));
        }),
        // fetching data from a specific page
        specificPage: (_, args, { dataSources }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield dataSources.characterAPI.getByPage(args.page).then((receivedData) => receivedData);
        })
    }
};
//# sourceMappingURL=serviceResolver.js.map