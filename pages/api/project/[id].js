const Project = require("../../../models/project");

export default async function getOneProject(req, res) {
  const result = await Project.getOneProject(req.params.id);
  console.log(result);
  res.status(200).send(result);
}

export async function editProject(req, res) {
  console.log(req.params.id, req.body);
  const result = await Project.editProject(
    req.params.id,
    req.body.formTitle,
    req.body.formImage,
    req.body.formDetails
  );
  console.log(result);
  res.status(200).send(result);
}
