import Image from "next/image";
import Rond from "../../public/images/jeu_du_rond.jpeg";
import axios from "axios";
import Link from "next/link";

export default function Admin({ projects }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Projets</td>
            <td>Supprimer</td>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => {
            return (
              <tr key={project.id}>
                <td> {project.title} </td>
                <td>
                  <button> Delete </button>
                  <Link key={project.id} passhref={`/admin/${project.id}`}>
                    <button> Edit </button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h1>Administrateur</h1>
      <div>
        <Image src={Rond} alt="jeu_du_rond" layout="responsive" />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await axios.get(`http://localhost:3000/api/project`);
  const projects = await res.data;

  return {
    props: {
      projects,
    },
  };
}
