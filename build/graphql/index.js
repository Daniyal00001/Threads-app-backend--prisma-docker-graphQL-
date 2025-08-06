"use strict";
// -------------------------------------------Apollo Server--------------------------------------------------
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApolloServerGraphQLLL = ApolloServerGraphQLLL;
const apollo_server_express_1 = require("apollo-server-express");
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const users_1 = __importDefault(require("./users"));
async function ApolloServerGraphQLLL(app) {
    app.use((0, cors_1.default)());
    app.use(body_parser_1.default.json());
    // create ApolloServer
    const server = new apollo_server_express_1.ApolloServer({
        typeDefs: users_1.default.typeDefs,
        resolvers: users_1.default.resolvers,
    });
    await server.start();
    server.applyMiddleware({ app: app });
}
//# sourceMappingURL=index.js.map