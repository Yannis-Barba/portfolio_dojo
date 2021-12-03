import { getProjects, getOneProject } from "../../models/project";
import Layout from "../../components/Layout";
import { useState } from "react";
import axios from "axios";

function Project({ project }) {
  const [formTitle, setFormTitle] = useState(project.title);
  const [formDetails, setFormDetails] = useState(project.details);
  const [formImage, setFormImage] = useState(project.image);

  return (
    <Layout pageTitle={project.title}>
      <img src={project.main_pictures} alt={project.title} />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          axios.patch(`http://localhost:3000/api/project/${project.id}`, {
            formTitle,
            formDetails,
            formImage,
          });
        }}
      >
        <input
          value={formTitle}
          onChange={(e) => setFormTitle(e.target.value)}
        ></input>
        <input
          value={formImage}
          onChange={(e) => setFormImage(e.target.value)}
        ></input>
        <textarea
          value={formDetails}
          onChange={(e) => setFormDetails(e.target.value)}
        >
          {" "}
        </textarea>
        <button type="submit" />
      </form>
    </Layout>
  );
}

export async function getStaticPaths() {
  const project = await getProjects();

  const paths = project.map((project) => ({
    params: {
      id: project.id.toString(),
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const project = await getOneProject(context.params.id);
  console.log(project);

  return { props: { project } };
}

export default Project;
