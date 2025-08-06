declare const mutations: {
    createUser: (_: any, args: {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
    }) => Promise<boolean>;
};
export default mutations;
//# sourceMappingURL=mutations.d.ts.map