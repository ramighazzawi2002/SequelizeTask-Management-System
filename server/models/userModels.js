const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;

// class User {
//   static async findByEmail(email) {
//     const result = await pool.query("SELECT * FROM users WHERE email = $1", [
//       email,
//     ]);
//     return result.rows[0];
//   }

//   static async create(name, email, password) {
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);
//     const result = await pool.query(
//       "INSERT INTO users (userName, email, password) VALUES ($1, $2, $3) RETURNING id",
//       [name, email, hashedPassword]
//     );
//     return result.rows[0];
//   }

//   static async findById(id) {
//     const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
//     return result.rows[0];
//   }

//   static async validatePassword(providedPassword, storedPassword) {
//     return await bcrypt.compare(providedPassword, storedPassword);
//   }
// }

// module.exports = User;
