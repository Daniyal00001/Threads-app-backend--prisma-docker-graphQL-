declare const _default: {
    typeDefs: import("graphql").DocumentNode;
    resolvers: {
        Query: {
            getUsers: () => {
                id: string;
                firstName: string;
                lastName: string;
                email: string;
            }[];
        };
        Mutation: {
            createUser: (_: any, args: {
                firstName: string;
                lastName: string;
                email: string;
                password: string;
            }) => Promise<boolean>;
        };
    };
};
export default _default;
//# sourceMappingURL=index.d.ts.map