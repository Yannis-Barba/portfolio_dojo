const connection = require("../../db-config");
const Project = require("../../models/project");

export default async function getOneProject(req, res) {
  const result = await Project.getOneProject(req.params.id);
  console.log(result);
  res.status(200).send(result);
}
