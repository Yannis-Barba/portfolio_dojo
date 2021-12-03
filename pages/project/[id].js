// import { useRouter } from "next/router";

import axios from "axios";
import { getProjects, getOneProject } from "../../models/project";
import Layout from "../../components/Layout";

// const Project = ({project}) => {
//   const router = useRouter();
//   const { id } = router.query;

//   return <p> Project : {id}</p>;
// };

// export default Project;

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
  //   const projects = res.data;
  //   console.log(projects);

  const paths = project.map((project) => ({
    params: {
      id: project.id.toString(),
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const project = await getOneProject(context.params.id);
  //   const project = res.data;
  console.log(project);

  return { props: { project } };
}

export default Project;
