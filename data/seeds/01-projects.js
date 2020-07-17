exports.seed = function (knex) {
  return knex("projects").insert([
    {
      name: "Do Laundry",
      description: "Laundry needs to be done.",
    },
    {
      name: "Clean apartment.",
      description: "Apartment needs to be cleaned.",
    },
  ]);
};
