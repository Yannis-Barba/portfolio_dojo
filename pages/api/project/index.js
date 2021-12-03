const connection = require("../../../db-config");
const Project = require("../../../models/project");

export default async function projects(req, res) {
  console.log("sur le serveur");
  try {
    if (req.method === "GET") {
      const result = await Project.getProjects();
      console.log(result);
      res.status(200).send(result);
    }
  } catch (err) {}
}
