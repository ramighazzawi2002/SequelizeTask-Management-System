const { Task } = require("../associations/associations");

const TaskServices = {
  async createTask(user_id, title, description) {
    return await Task.create({
      user_id: user_id,
      title: title,
      description: description,
    });
  },
  async getTasks(id) {
    return await Task.findAll({
      where: {
        user_id: id,
        isDeleted: false,
      },
    });
  },
  async updateTask(title, description, id) {
    return await Task.update(
      {
        title: title,
        description: description,
      },
      {
        where: {
          id: id,
        },
      }
    );
  },
  async deleteTask(id) {
    return await Task.update(
      {
        isDeleted: true,
      },
      {
        where: {
          id: id,
        },
      }
    );
  },
};

module.exports = TaskServices;
