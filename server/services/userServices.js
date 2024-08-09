const { User } = require("../associations/associations");
const bcrypt = require("bcryptjs");

const UserServices = {
  async createUser(name, email, password) {
    const salt = await bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return await User.create({
      userName: name,
      email: email,
      password: hashedPassword,
    });
  },
  async findByEmail(email) {
    return await User.findOne({
      where: {
        email: email,
      },
    });
  },
  async findById(id) {
    return await User.findOne({
      where: {
        id: id,
      },
    });
  },
  async validatePassword(providedPassword, storedPassword) {
    return await bcrypt.compare(providedPassword, storedPassword);
  },
};

module.exports = UserServices;
