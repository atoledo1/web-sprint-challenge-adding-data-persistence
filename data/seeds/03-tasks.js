exports.seed = function (knex) {
  return knex("tasks").insert([
    {
      project_id: 1,
      description: "Wash clothes",
      notes: "Don't waste detergent",
    },
    {
      project_id: 1,
      description: "Dry clothes",
      notes: "Don't forget dryer sheets",
    },
    {
      project_id: 2,
      description: "Vacuum floor",
      notes: "Use correct setting",
    },
    {
      project_id: 2,
      description: "Swiffer floor",
      notes: "Don't forget to clean under tables",
    },
  ]);
};
