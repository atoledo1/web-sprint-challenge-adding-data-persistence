exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("resources").insert([
    {
      name: "Things to be cleaned",
      description: "Apartment floor/clothes",
    },
    {
      name: "Electricity",
      description: "Need it for vacuum and washer/dryer",
    },
    {
      name: "Washer/dryer",
      description: "For clothes",
    },
    {
      name: "Vacuum/Swiffer",
      description: "For floor",
    },
  ]);
};
