import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Gal",
      email: "gal123@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "Dan",
      email: "dan@gmail.com",
      password: bcrypt.hashSync("4567", 8),
      isAdmin: false,
    },
  ],
};

export default data;
