declare const resolvers: {
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
export default resolvers;
//# sourceMappingURL=resolvers.d.ts.map