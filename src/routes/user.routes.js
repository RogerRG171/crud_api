const {
  create,
  get,
  getId,
  update,
  exclude,
} = require("../controllers/user.controller");

exports.userRoutes = (app) => {
  app.post("/user", create);
  app.put("/user/:id", update);
  app.get("/user", get);
  app.get("/user/:id", getId);
  app.delete("/user/:id", exclude);
};
