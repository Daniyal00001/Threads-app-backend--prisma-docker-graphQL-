"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../../lib/db");
const mutations = {
    createUser: async (_, args) => {
        const { firstName, lastName, email, password } = args;
        await db_1.prismaClient.user.create({
            data: {
                firstName,
                lastName,
                email,
                password,
                salt: "salt", // You should generate salt in real-world apps
            },
        });
        return true;
    },
};
exports.default = mutations;
//# sourceMappingURL=mutations.js.map