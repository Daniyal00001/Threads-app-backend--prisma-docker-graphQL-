import {prismaClient} from "../../lib/db";

const mutations = {
  createUser: async (
    _: any,
    args: {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
    }
  ) => {
    const { firstName, lastName, email, password } = args;
    await prismaClient.user.create({
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

export default mutations;
