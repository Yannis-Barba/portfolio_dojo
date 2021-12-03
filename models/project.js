const connection = require("../db-config");

module.exports.getProjects = () => {
  return connection
    .promise()
    .query("SELECT * FROM projects")
    .then(([res]) => {
      console.log(res);
      return res;
    });
};

module.exports.getOneProject = (id) => {
  return connection
    .promise()
    .query("SELECT * FROM projects WHERE id = ? ", [id])
    .then(([res]) => res[0]);
};

module.exports.editProject = (id, title, image, details) => {
  return connection
    .promise()
    .query(
      "UPDATE projects SET title, main_pictures, details VALUES (?,?,?) WHERE id = ?",
      [title, image, details, id]
    )
    .then(([res]) => res[0]);
};
