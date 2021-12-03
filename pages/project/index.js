import Layout from "../../components/Layout";
import Image from "next/image";
import myImg from "../../public/images/yannis_barba.jpg";
import axios from "axios";
import Link from "next/link";

export default function About({ projects }) {
  return (
    <Layout pageTitle={"About Us"}>
      About me
      <Image alt="lyon" src={myImg} layout="responsive" />
      <div>
        <p> Recrutez moi SVP, je suis intelligent et beau </p>
        <ul>
          {projects.map((project) => {
            return (
              <Link key={project.id} href={`/project/${project.id}`}>
                <li key={project.id}>
                  <div>
                    <h2>{project.title} </h2>
                    <img
                      alt={project.title}
                      src={project.main_pictures}
                      width={120}
                      height={120}
                    />
                    <p>{project.details}</p>
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await axios.get(`http://localhost:3000/api/projects`);
  const projects = await res.data;

  // if (!projects) {
  //   return {
  //     redirect: {
  //       destination: "/",
  //       permanent: false,
  //     },
  //   };
  // }

  return {
    props: {
      projects,
    },
  };
}
