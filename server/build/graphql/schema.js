"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const schema_1 = require("@graphql-tools/schema");
const serviceSchema_1 = require("../service/serviceSchema");
const serviceResolver_1 = require("../service/serviceResolver");
exports.schema = (0, schema_1.makeExecutableSchema)({
    typeDefs: serviceSchema_1.ServiceTypeDefs,
    resolvers: serviceResolver_1.ServiceResolvers,
});
//# sourceMappingURL=schema.js.map