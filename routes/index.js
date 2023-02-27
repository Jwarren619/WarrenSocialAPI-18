const rootRouter = require("express").Router();
const apiRouter = require("./api");

rootRouter.use("/api", apiRouter);

module.exports = rootRouter;
