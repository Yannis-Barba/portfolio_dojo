import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio Dojo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout pageTitles="Mon Portfolio">
        <h1 className={styles.title}>Bienvenue sur mon portfolio</h1>
        <Image
          src="/images/Canada-general.jpg"
          height={1200}
          width={2000}
          alt="Le beau gosse"
        />

        <div>
          <h2>Ma Biographie</h2>
          <p>
            Lorem ipsum dolor sit amet. Et enim voluptas At aperiam excepturi
            sed aliquam officiis qui sunt consectetur? Et rerum saepe aut
            quaerat atque rem quidem corporis aut aliquid sequi ex delectus
            aperiam ea enim voluptas ad reprehenderit Quis! Eos modi quis nam
            temporibus fugiat est fuga 👌🏻soluta ut dolorum autem et earum
            molestiae et omnis ipsam eos unde tempora. Qui quaerat tenetur quo
            accusantium iste ea voluptatem totam non earum pariatur non nesciunt
            vero est ipsa illo eos impedit aliquid. Aut temporibus reprehenderit
            ea fugit commodi voluptates odit.
          </p>
        </div>
        <Link href="/project">
          <button type="button"> Mes Réalisations </button>
        </Link>
      </Layout>
    </div>
  );
}
