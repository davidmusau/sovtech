"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceTypeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.ServiceTypeDefs = (0, apollo_server_express_1.gql) `
    type Characters {
        name: String
        height: Int
        mass: Int
        gender: String
        homeworld: String
    }
    type Planet {
        name:String
        Climate:String
    }
  
    type Query {
        # Fetch all users
        characters:[Characters]
        #Get Person details
        person(name:String!):[Characters]
        #pagination
        specificPage(page:Int!):[Characters]
    }
`;
//# sourceMappingURL=serviceSchema.js.map