const express = require("express");

const server = express();

const projectsRouter = require("./routers/projectsR.js");
const resourcesRouter = require("./routers/resourcesR.js");
const tasksRouter = require("./routers/tasksR.js");

server.use(express.json());

server.use("/api/projects", projectsRouter);
server.use("/api/resources", resourcesRouter);
server.use("/api/tasks", tasksRouter);

module.exports = server;
