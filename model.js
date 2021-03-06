const db = require("./data/db-config");

module.exports = {
  addResource,
  getResources,
  addProject,
  getProjects,
  getProjectResources,
  addProjectResource,
  getProjectTasks,
  getProjectsByResource,
  addTask,
  getTasks,
  updateTask,
  deleteTask,
};

async function addResource(resource) {
  return await db("resources").insert(resource);
}

async function getResources() {
  return await db("resources");
}

async function addProject(project) {
  return await db("projects").insert(project);
}

async function getProjects() {
  return await db("projects");
}

async function addTask(task) {
  return await db("tasks").insert(task);
}

async function getTasks() {
  return await db("tasks")
    .join("projects", "projects.id", "=", "tasks.project_id")
    .select(
      "tasks.id",
      "tasks.description",
      "tasks.notes",
      "tasks.completed",
      "tasks.project_id",
      "projects.name as project_name",
      "projects.description as project_description"
    );
}

async function updateTask(task, id) {
  return await db("tasks").where({ id }).update(task);
}

async function deleteTask(id) {
  return await db("tasks").where({ id }).del();
}

async function getProjectResources(project_id) {
  return await db("project_resources")
    .where({ project_id })
    .join("resources", "resources.id", "=", "project_resources.resource_id")
    .select("resources.id", "resources.name", "resources.description");
}

async function getProjectTasks(project_id) {
  return await db("tasks").where({ project_id });
}

async function getProjectsByResource(resource_id) {
  return await db("project_resources")
    .where({ resource_id })
    .join("projects", "projects.id", "=", "project_resources.project_id")
    .select(
      "projects.id",
      "projects.name",
      "projects.description",
      "projects.completed"
    );
}

async function addProjectResource(resource_id, project_id) {
  return await db("project_resources").insert({ resource_id, project_id });
}
