const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

const userRouter = require("./routes/userRouters");
const taskRouter = require("./routes/taskRouter");
// const sequelize = require("./config/db");

app.use(cors());
app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/tasks", taskRouter);

// sequelize
//   .sync({ force: false }) // Set force to true to drop and recreate tables on every sync
//   .then(() => {
//     console.log("Database & tables created!");
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
//   })
//   .catch(err => {
//     console.error("Unable to connect to the database:", err);
//   });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
