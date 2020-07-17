const router = require("express").Router();
const db = require("../model.js");

router.get("/", async (req, res) => {
  try {
    const resources = await db.getResources();
    res.status(200).json(resources);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to retrieve resources" });
  }
});

router.get("/:id/projects", async (req, res) => {
  try {
    const projects = await db.getProjectsByResource(req.params.id);
    res.status(200).json(projects);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to retrieve projects" });
  }
});

router.post("/", async (req, res) => {
  try {
    const resource = req.body;

    const resourceId = await db.addResource(resource);
    res.status(201).json(resourceId);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to add resource" });
  }
});

module.exports = router;
