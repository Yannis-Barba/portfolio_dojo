import { getProjects, getOneProject } from "../../models/project";
import Layout from "../../components/Layout";

function Project({ project }) {
  if (!project) return "loading...";

  return (
    <Layout pageTitle={project.title}>
      <img alt={project.title} src={project.main_pictures} />
      <h2>{project.title}</h2>
      <p>{project.details}</p>
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
