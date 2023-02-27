const apiRouter = require("express").Router();
const thoughtRoutes = require("./thought");
const userRoutes = require("./user");

apiRouter.use("/thought", thoughtRoutes);
apiRouter.use("/user", userRoutes);

module.exports = apiRouter;
