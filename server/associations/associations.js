const User = require("../models/userModels");
const Task = require("../models/taskModels");

User.hasMany(Task, { foreignKey: "user_id" });
Task.belongsTo(User, { foreignKey: "user_id" });

module.exports = { User, Task };
