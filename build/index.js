"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const graphql_1 = require("./graphql");
async function startServer() {
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    await (0, graphql_1.ApolloServerGraphQLLL)(app);
    app.listen(3000, () => {
        console.log(`🚀 Server ready at http://localhost:3000`);
    });
}
startServer();
//# sourceMappingURL=index.js.map