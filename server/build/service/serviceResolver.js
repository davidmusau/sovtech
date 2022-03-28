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
        characters: (_, __, { dataSources }) => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield dataSources.characterAPI.getAllPeople();
            return res.results.map((item) => ({
                name: item.name, height: item.height, mass: item.mass,
                gender: item.gender, homeworld: item.homeworld,
            }));
        }),
        person: (_, args, { dataSources }) => __awaiter(void 0, void 0, void 0, function* () {
            let res = yield dataSources.characterAPI.getByName(args.name);
            return res.results.map((item) => ({
                name: item.name, height: item.height, mass: item.mass,
                gender: item.gender, homeworld: item.homeworld,
            }));
        }),
        specificPage: (_, args, { dataSources }) => __awaiter(void 0, void 0, void 0, function* () {
            let res = yield dataSources.characterAPI.getByPage(args.page);
            return res.results.map((item) => ({
                name: item.name, height: item.height, mass: item.mass,
                gender: item.gender, homeworld: item.homeworld,
            }));
        })
    }
};
//# sourceMappingURL=serviceResolver.js.map