"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceTypeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.ServiceTypeDefs = (0, apollo_server_express_1.gql) `
    type Character {
        name: String
        height: Int
        mass: String
        gender: String
        homeworld: String
    }
    type PageResponse{
        count:Int
        next:String
        previous:String
    results:[Character]
    }
    type Query {
        # Fetch all users
        characters:[Character]
        #Get Person details
        person(name:String!):[Character]
        #pagination
        specificPage(page:Int!):PageResponse
    }
`;
//# sourceMappingURL=serviceSchema.js.map