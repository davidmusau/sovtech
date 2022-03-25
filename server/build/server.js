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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const cors_1 = __importDefault(require("cors"));
const schema_1 = require("./graphql/schema");
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    const app = (0, express_1.default)();
    const port = process.env.PORT || 5000;
    app.use((0, cors_1.default)());
    const httpServer = (0, http_1.createServer)(app);
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: schema_1.schema,
    });
    yield apolloServer.start();
    apolloServer.applyMiddleware({
        app,
        path: '/api'
    });
    httpServer.listen({ port }, () => console.log(`🚀 Apollo GraphQL-Server is running on http://localhost:${port}${apolloServer.graphqlPath}`));
});
startServer();
//# sourceMappingURL=server.js.map