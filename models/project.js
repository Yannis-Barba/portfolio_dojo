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
