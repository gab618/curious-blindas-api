require("dotenv").config();

export default {
  secret: process.env.PASSPHRASE,
  expiresIn: "7d",
};
